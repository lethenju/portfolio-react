import React from "react";
import { animated, useSpring } from "react-spring";
const project_json = require("./articles/projects.json"); //with path

function makeProjects(props) {
  let projects = [];
  let id = 0;
  for (const project of project_json.projects) {
    id++;
    projects.push(
      <ProjectGeneric
        key={id}
        project={project}
        hide_callback={props.hide_callback}
        animated={props.animated}
        language={props.language}
      />
    );
  }
  return projects;
}

export default function ProjectBar(props) {
  // todo : -> use github API to automatically generate project informations
  return <div className="ProjectBar">{makeProjects(props)}</div>;
}
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
function ProjectGeneric(props) {
  const Project = props.animated ? ProjectAnimated : ProjectNotAnimated;
  return <Project {...props} />;
}

function ProjectAnimated(props) {
  const [my_props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="Project">
      <animated.div
        className="Project_inside"
        tabIndex="0"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onClick={() => props.hide_callback(props.project)}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: my_props.xys.interpolate(trans),
        }}
      >
        <h3>{props.project.name}</h3>
        <p className="Description">
          {props.language === "fr-FR"
            ? props.project.description_fr
            : props.project.description_en}
        </p>
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
        onClick={() => props.hide_callback(props.project)}
      >
        <h3>{props.name}</h3>
        <p className="Description">{props.description}</p>
      </div>
    </div>
  );
}
