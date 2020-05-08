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
    this.state = {
      project_page: false,
      project_name: "",
      project_description: ""
    };
  }
  switch_to_project(project) {
    // Prevent selecting text to change page
    var selection = window.getSelection();
    if (selection.toString().length === 0) {
      this.setState({
        project_page: true,
        project: project
      });
    }
  }
  switch_to_homepage() {
    this.setState({ project_page: false });
  }

  render() {
    return (
      <div className="App">
        <HomePage switch_to_project_callback={this.switch_to_project} animated={this.state.project_page === false} />
        <CSSTransition
          in={this.state.project_page}
          timeout={300}
          classNames="projectanim"
          unmountOnExit
        >
          <ProjectPage
            switch_to_homepage_callback={this.switch_to_homepage}
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
