import React from "react";

export default function ProfilePanel(props) {
  return (
    <div className="ProfilePanel">
      <div className="ProfilePanel_SidePane">
        <img
          className="profile"
          src="https://avatars3.githubusercontent.com/u/19967417?s=460&u=ecd48d2ab4260cbee902be8fde3828068cd5f0f2&v=4"
          alt="profile pic"
        />
      </div>
      <div className="ProfilePanel_MainPane">
        <h2>Embedded Systems Engineer</h2>
        <p>
          Passionate about system developpement, Linux, C and C++.
          <br /> I worked at Sagemcom for 2 years in Tunisia.
          <br />
          <br /> I also love working on side projects ! You can see a few of them below :)
        </p>
      </div>
    </div>
  );
}
