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
    this.update_scroll = this.update_scroll.bind(this);
    this.get_scroll = this.get_scroll.bind(this);
    this.state = {
      project_page: false,
      project_name: "",
      project_description: "",
      scroll_position: 0
    };
  }
  switch_to_project(name, description) {
    // Prevent selecting text to change page
    var selection = window.getSelection();
    if (selection.toString().length === 0) {
      this.setState({
        project_page: true,
        project_name: name,
        project_description: description
      });
    }
  }
  switch_to_homepage() {
    // Prevent selecting text to change page
    var selection = window.getSelection();
    if (selection.toString().length === 0) {
      this.setState({ project_page: false });
    }
  }
  update_scroll(currPos) {
    console.table(currPos);
    this.setState({ scroll_position: currPos });
  }
  get_scroll() {
    return this.state.scroll_position;
  }
  render() {
    return (
      <div className="App">
        <CSSTransition
          in={this.state.project_page}
          timeout={300}
          classNames="projectanim"
          unmountOnExit
        >
          <ProjectPage
            switch_to_homepage_callback={this.switch_to_homepage}
            name={this.state.project_name}
            description={this.state.project_description}
          />
        </CSSTransition>

        {this.state.project_page ? null : (
          <HomePage
            scroll_position_getter={this.get_scroll}
            switch_to_project_callback={this.switch_to_project}
            update_scroll_callback={this.update_scroll}
          />
        )}
      </div>
    );
  }
}

export default function display_app() {
  return <App />;
}
