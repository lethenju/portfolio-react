import React from "react";
import MarkdownView from "react-showdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
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
  let project = props.project

  return (
    <div className="ProjectPage">
      
      {window.innerWidth > 1400 ? (
      <div className="ProjectPage_sidePane">
        <h1>{project.name}</h1>
        <h3>{project.description}</h3>
        <div className="Link">
          <a href={"https://" + project.link}>
            {project.link}
          </a>
        </div>
          <div id="wrapperButton">
            <button
              className="BackButton"
              onClick={() => props.switch_to_homepage_callback()}
            >
              <FontAwesomeIcon
                className="IconBackButton"
                icon={faArrowLeft}
                size="2x"
              />
            </button>
          </div>
      </div>
        ) : null}
      <div className="ProjectPage_mainPane">
        <div className="ProjectPage_mainPane_article">
        {window.innerWidth < 1400 ? (
          <div>
            <h1>{project.name}</h1>
            <h3>{project.description}</h3>
            <div className="Link">
              <a href={"https://" + project.link}>
                {project.link}
              </a>
            </div>
          </div>
        ) : null }
          {project.screenshot === "" ? (
            <div className="img_placeholder" /> // When there is no image yet
          ) : (
            <img
              src={project.screenshot}
              alt="Project screenshot"
            />
          )}
          <MarkdownView
            className="markdown_view"
            markdown={project.markdown}
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
              size="2x"
            />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
