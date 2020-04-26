import React, { Children } from "react";
import ProjectBar from "./ProjectBar";
import ProfilePanel from "./ProfilePanel";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function Hello(props) {
  return (
    <div className="hello">
      <h1> Hi ! I am </h1>
      <div className="my-name">
        <h1> {props.name}</h1>
      </div>
    </div>
  );
}

export default function HomePage(props) {
  const [elementPosition, setElementPosition] = React.useState({
    x: 0,
    y: 0
  });
  useScrollPosition(({ prevPos, currPos }) => {
    setElementPosition(currPos.x, currPos.y);
  });

  return (
    <div>
      <Hello name="Julien LE THENO" />
      <ProfilePanel />
      <ProjectBar hide_callback={props.switch_to_project_callback} />
    </div>
  );
}
