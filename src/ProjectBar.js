import React from "react";
import { animated, useSpring } from "react-spring";

export default function ProjectBar(props) {
  return (
    // todo : -> use github API to automatically generate project informations
    <div className="ProjectBar">
      <div className="horizontal-scroll-wrapper">
        <Project
          name="WinMan"
          description="Terminal “Window Manager” in C"
          hide_callback={props.hide_callback}
        />

        <Project
          name="GoState"
          description="State machine framework in go"
          hide_callback={props.hide_callback}
        />
        <Project
          name="Databash"
          description="Database system POC in bash"
          hide_callback={props.hide_callback}
        />
        <Project
          name="TestMan"
          description="Micro Unit Test framework in C"
          hide_callback={props.hide_callback}
        />
        <Project
          name="ResMan"
          description="Resource Manager"
          hide_callback={props.hide_callback}
        />
        <Project
          name="Log System"
          description="Small log system in C"
          hide_callback={props.hide_callback}
        />
      </div>
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
