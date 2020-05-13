import React from "react";
import { CSSTransition } from "react-transition-group";
import ProjectPage from "./ProjectPage";
import HomePage from "./HomePage";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.switch_to_project = this.switch_to_project.bind(this);
    this.switch_to_homepage = this.switch_to_homepage.bind(this);
    this.set_language = this.set_language.bind(this);
    this.state = {
      project_page: false,
      language: window.navigator.language
    };
  }
  switch_to_project(project) {
    // Prevent selecting text to change page
    let selection = window.getSelection();
    // Load projects 
    if (this.state.language === 'fr-FR'){
      project.markdown = project.name+"_fr"
    } else {
      project.markdown = project.name
    }
    import(`./articles/${project.markdown}.md`)
    .then(m=>m.default)
    .then(path=>fetch(path))
    .then(response=>response.ok?response.text():Promise.reject(new Error(response.statusText)))
    .then(md=>{project.markdown = md})
    .catch(err => {console.error(err);project.markdown = "Didnt find article :("})
    .then(_ => {if (selection.toString().length === 0) {
      this.setState({
        project_page: true,
        project: project
      });
    }})
  

    
  }
  switch_to_homepage() {
    this.setState({ project_page: false });
  }
  set_language(language) {
    this.setState({language: language})
  }
  render() {
    return (
      <div className="App">
        <HomePage language={this.state.language} set_language_callback={this.set_language} switch_to_project_callback={this.switch_to_project} animated={this.state.project_page === false} />
        <CSSTransition
          in={this.state.project_page}
          timeout={300}
          classNames="projectanim"
          unmountOnExit
        >
          <ProjectPage
            switch_to_homepage_callback={this.switch_to_homepage}
            language={this.state.language}
            project={this.state.project}
          />
        </CSSTransition>
      </div>
    );
  }
}

export default function display_app() {
  return <App />;
}
