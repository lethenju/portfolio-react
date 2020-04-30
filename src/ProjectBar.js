import React from "react";
import { animated, useSpring } from "react-spring";

export default function ProjectBar(props) {
  return (
    // todo : -> use github API to automatically generate project informations
    <div className="ProjectBar">
      <ProjectGeneric
        name="WinMan"
        description="Terminal “Window Manager” in C"
        hide_callback={props.hide_callback}
      />

      <ProjectGeneric
        name="GoState"
        description="State machine framework in go"
        hide_callback={props.hide_callback}
      />
      <ProjectGeneric
        name="Databash"
        description="Database system POC in bash"
        hide_callback={props.hide_callback}
      />
      <ProjectGeneric
        name="TestMan"
        description="Micro Unit Test framework in C"
        hide_callback={props.hide_callback}
      />
      <ProjectGeneric
        name="ResMan"
        description="Resource Manager"
        hide_callback={props.hide_callback}
      />
      <ProjectGeneric
        name="Log System"
        description="Small log system in C"
        hide_callback={props.hide_callback}
      />
    </div>
  );
}
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
function ProjectGeneric(props) {
  const ua = navigator.userAgent.toLowerCase();
  const Project =
    ua.includes("safari") && !ua.includes("chrome")
      ? ProjectNotAnimated
      : ProjectAnimated;

  // If we're on safari, don't use react spring : theres a display bug when moving
  // to project page (the tile is merging in the new page, creating
  // unwanted glitches..)
  return (
    <Project
      name={props.name}
      description={props.description}
      hide_callback={props.hide_callback}
    />
  );
}

function ProjectAnimated(props) {
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
// Theres a bug if I want to toggle animation in props..
function ProjectNotAnimated(props) {
  return (
    <div className="Project">
      <div
        className="Project_inside"
        onClick={() => props.hide_callback(props.name, props.description)}
      >
        <h3>{props.name}</h3>
        <p className="Description">{props.description}</p>
      </div>
    </div>
  );
}
