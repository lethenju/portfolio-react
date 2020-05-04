import React from "react";
import { animated, useSpring } from "react-spring";
const project_json = require('./projects.json'); //with path


function makeProjects(props, ) {
  let projects = [];
  let id = 0;
  for (const project of project_json.projects) {
    id++;
    projects.push(  
      <Project
        key={id}
        name={project.name}
        description={project.description}
        hide_callback={props.hide_callback}
      />)
  }
  return projects
}

export default function ProjectBar(props) {
  // todo : -> use github API to automatically generate project informations
  return (
    <div className="ProjectBar">
      {makeProjects(props)}
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

function Project(props) {
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
