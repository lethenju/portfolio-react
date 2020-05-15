import React from "react";

export default function ProfilePanel(props) {
  const [_, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener("resize", handleResize);

    return _ => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="ProfilePanel">
      <div className="ProfilePanel_SidePane">
        <img
          className="profile"
          src="https://avatars3.githubusercontent.com/u/19967417?s=460&u=ecd48d2ab4260cbee902be8fde3828068cd5f0f2&v=4"
          alt="profile pic"
        />
        { window.innerWidth >= 1000 ?
        <div className="button_row">
          <a className="button_big" href="https://www.github.com/lethenju">GitHub</a>
          <a className="button_big" href="https://www.linkedin.com/in/julien-letheno/">LinkedIn</a>
          <a className="button_big" href="mailto:julien.letheno@gmail.com">Send mail</a> 
        </div>
        : ""}
      </div>
      <div className="ProfilePanel_MainPane">
        {props.language === "fr-FR" ? (
        <div>
          <h2>Ingénieur Systèmes Embarqués</h2>
          <p>
            Passioné de développement Système, Linux, C et C++.
            <br /> J'ai travaillé pour Sagemcom pendant 2 ans en Tunisie
            <br />
            <br /> J'adore aussi travailler sur des projets personnels ! En voici quelques un :)
          </p>
        </div>
        ) : (
        <div>
          <h2>Embedded Systems Engineer</h2>
          <p>
            Passionate about system developpement, Linux, C and C++.
            <br /> I worked at Sagemcom for 2 years in Tunisia.
            <br />
            <br /> I also love working on side projects ! You can see a few of them below :)
          </p>
        </div>
        )}
        { window.innerWidth < 1000 ?
        <div className="button_row">
          <a className="button_big" href="https://www.github.com/lethenju">GitHub</a>
          <a className="button_big" href="https://www.linkedin.com/in/julien-letheno/">LinkedIn</a>
          <a className="button_big" href="mailto:julien.letheno@gmail.com">Send mail</a> 
        </div>
        : ""}
      </div>

    </div>
  );
}
