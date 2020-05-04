import React from "react";
import ProjectBar from "./ProjectBar";
import ProfilePanel from "./ProfilePanel";
import Footer from "./Footer";


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
  return (
    <div>
      <Hello name="Julien LE THENO" />
      <ProfilePanel />
      <ProjectBar hide_callback={props.switch_to_project_callback} animated={props.animated} />
      <Footer />
    </div>
    );

}
