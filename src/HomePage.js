import React, { useState } from "react";
import ProjectBar from "./ProjectBar";
import ProfilePanel from "./ProfilePanel";
import Footer from "./Footer";

function Hello(props) {
  return (
    <div className="hello">
      <h1>{props.language === "fr-FR" ? "Bonjour ! Je suis" : "Hi ! I am"} </h1>

      <div className="my-name">
        <h1> {props.name}</h1>
      </div>
    </div>
  );
}

export default function HomePage(props) {
  let [language, setLanguage] = useState(props.language);

  return (
    <div>
      <div className="language_buttons">
        <button
          className="language_button"
          onClick={() => {
            setLanguage("fr-FR");
            props.set_language_callback("fr-FR");
          }}
        >
          fr
        </button>
        <button
          className="language_button"
          onClick={() => {
            setLanguage("en-US");
            props.set_language_callback("en-US");
          }}
        >
          en
        </button>
      </div>
      <Hello language={language} name="Julien LE THENO" />
      <ProfilePanel language={language} />
      <ProjectBar
        language={language}
        hide_callback={props.switch_to_project_callback}
        animated={props.animated}
      />
      <Footer />
    </div>
  );
}
