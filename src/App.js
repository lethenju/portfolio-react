import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

import "./styles.css";

class Hello extends React.Component {
  render() {
    return (
      <div id="hello">
        <h1> Bonjour, je suis </h1>
        <div id="my-name">
          <h2> {this.props.name}</h2>
        </div>
      </div>
    );
  }
}

class ProjectBar extends React.Component {
  constructor(props) {
    super(props);
    this.hide_toggle = this.hide_toggle.bind(this);
  }
  hide_toggle(name, description) {
    this.props.hide_callback(name, description);
  }

  render() {
    return (
      <div className="ProjectBar">
        <div className="horizontal-scroll-wrapper">
          <Project
            name="WinMan"
            description="Terminal “Window Manager” in C"
            hide_callback={this.hide_toggle}
          />
          <Project
            name="GoState"
            description="State machine framework in go"
            hide_callback={this.hide_toggle}
          />
          <Project
            name="Databash"
            description="Database system POC in bash"
            hide_callback={this.hide_toggle}
          />
        </div>
      </div>
    );
  }
}
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Project(props) {
  const [is_clicked, toggle_click] = useState(false);

  const [my_props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <div className="Project">
      <animated.div
        className="Project_inside"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onClick={() => props.hide_callback(props.name, props.description)}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: my_props.xys.interpolate(trans)
        }}
      >
        <h3>{props.name}</h3>
        <p className="Description">{props.description}</p>
      </animated.div>
    </div>
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.hide_toggle = this.hide_toggle.bind(this);
  }

  hide_toggle(name, description) {
    this.props.switch_to_project_callback(name, description);
  }
  render() {
    return (
      <div>
        <div>
          <Hello name="Julien LE THENO" />
          <ProjectBar hide_callback={this.hide_toggle} />
        </div>
      </div>
    );
  }
}

class ProjectPage extends React.Component {
  render() {
    return (
      <div
        className="BigProject"
        onClick={() => this.props.switch_to_homepage_callback()}
      >
        <h3>{this.props.name}</h3>
        <div className="Description">{this.props.description}</div>
      </div>
    );
  }
}
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
  switch_to_project(name, description) {
    console.log(name, description);

    this.setState({
      project_page: true,
      project_name: name,
      project_description: description
    });
  }
  switch_to_homepage() {
    this.setState({ project_page: false });
  }
  render() {
    return (
      <div className="App">
        {this.state.project_page ? (
          <ProjectPage
            switch_to_homepage_callback={this.switch_to_homepage}
            name={this.state.project_name}
            description={this.state.project_description}
          />
        ) : (
          <HomePage switch_to_project_callback={this.switch_to_project} />
        )}
      </div>
    );
  }
}

export default function display_app() {
  return <App />;
}
