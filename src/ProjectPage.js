import React from "react";
import MarkdownView from "react-showdown";
import {
  winman_md,
  databash_md,
  goState_md,
  testMan_md,
  resMan_md,
  logSystem_md
} from "./ProjectsMd.js";

export default function ProjectPage(props) {
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
    <div
      className="ProjectPage"
      onClick={() => props.switch_to_homepage_callback()}
    >
      <div className="ProjectPage_sidePane">
        <div className="ProjectPage_Name">{props.name}</div>
        <div className="ProjectPage_Description">{props.description}</div>
        <div className="ProjectPage_Link">{localStorage.getItem("github")}</div>
      </div>
      <div className="ProjectPage_mainPane">
        <div className="ProjectPage_mainPane_article">
          {localStorage.getItem("screenshot") === "" ? (
            <div className="img_placeholder" /> // When there is no image yet
          ) : (
            <img
              className="img_project"
              src={localStorage.getItem("screenshot")}
              alt="Project screenshot"
            />
          )}
          <MarkdownView
            markdown={localStorage.getItem("markdown")}
            options={{ tables: true, emoji: true }}
          />
        </div>
      </div>
    </div>
  );
}
