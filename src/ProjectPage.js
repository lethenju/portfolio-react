import React from "react";
import MarkdownView from "react-showdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  winman_md,
  databash_md,
  goState_md,
  testMan_md,
  resMan_md,
  logSystem_md
} from "./ProjectsMd.js";

library.add(faArrowLeft);

export default function ProjectPage(props) {
  const [dimensions, setDimensions] = React.useState({
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

  if (props.name === "WinMan") {
    localStorage.setItem("markdown", winman_md);
    localStorage.setItem("github", "github.com/lethenju/winman");
    localStorage.setItem(
      "screenshot",
      "https://i.ibb.co/C524Qvg/Screenshot-09052019-03-22-06-PM.png?raw=true"
    );
  } else if (props.name === "GoState") {
    localStorage.setItem("markdown", goState_md);
    localStorage.setItem("github", "github.com/lethenju/gostate");
    localStorage.setItem("screenshot", "");
  } else if (props.name === "Databash") {
    localStorage.setItem("markdown", databash_md);
    localStorage.setItem("github", "github.com/lethenju/databash");
    localStorage.setItem("screenshot", "");
  } else if (props.name === "TestMan") {
    localStorage.setItem("markdown", testMan_md);
    localStorage.setItem("github", "github.com/lethenju/testman");
    localStorage.setItem("screenshot", "");
  } else if (props.name === "ResMan") {
    localStorage.setItem("markdown", resMan_md);
    localStorage.setItem("github", "github.com/lethenju/resman");
    localStorage.setItem("screenshot", "");
  } else if (props.name === "Log System") {
    localStorage.setItem("markdown", logSystem_md);
    localStorage.setItem("github", "github.com/lethenju/logsystem");
    localStorage.setItem("screenshot", "");
  } else {
    localStorage.setItem("markdown", "not found");
    localStorage.setItem("github", "not found");
    localStorage.setItem("screenshot", "");
  }
  return (
    <div className="ProjectPage">
      <div className="ProjectPage_sidePane">
        <h1>{props.name}</h1>
        <h3>{props.description}</h3>
        <div className="Link">
          <a href={"https://" + localStorage.getItem("github")}>
            {localStorage.getItem("github")}
          </a>
        </div>
        {window.innerWidth > 1400 ? (
          <div id="wrapperButton">
            <button
              className="BackButton"
              onClick={() => props.switch_to_homepage_callback()}
            >
              <FontAwesomeIcon
                className="IconBackButton"
                icon={faArrowLeft}
                size="6x"
              />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="ProjectPage_mainPane">
        <div className="ProjectPage_mainPane_article">
          {localStorage.getItem("screenshot") === "" ? (
            <div className="img_placeholder" /> // When there is no image yet
          ) : (
            <img
              src={localStorage.getItem("screenshot")}
              alt="Project screenshot"
            />
          )}
          <MarkdownView
            className="markdown_view"
            markdown={localStorage.getItem("markdown")}
            options={{ tables: true, emoji: true }}
          />
        </div>
      </div>
      {window.innerWidth < 1400 ? (
        <div id="wrapperButton">
          <button
            className="BackButton"
            onClick={() => props.switch_to_homepage_callback()}
          >
            <FontAwesomeIcon
              className="IconBackButton"
              icon={faArrowLeft}
              size="3x"
            />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
