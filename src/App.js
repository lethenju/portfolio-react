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
  render() {
    return (
      <div className="ProjectBar">
        <div className="horizontal-scroll-wrapper">
          <Project name="WinMan" description="Terminal “Window Manager” in C" />
          <Project name="GoState" description="State machine framework in go" />
          <Project name="Databash" description="Database system POC in bash" />
        </div>
      </div>
    );
  }
}
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Project(props) {
  const [my_props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <div className="Project">
      <animated.div
        className="Project_inside"
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({ xys: [x * 2, y * 2] })
        }
        onMouseLeave={() => set({ xys: [0, 0, 0] })}
        style={{ transform: my_props.xys.interpolate(trans) }}
      >
        <h3>{props.name}</h3>
        <p className="Description">{props.description}</p>
      </animated.div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Hello name="Julien LE THENO" />
      <ProjectBar />
    </div>
  );
}
