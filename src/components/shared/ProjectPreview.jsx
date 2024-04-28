import React, { useState } from "react";

const ProjectPreview = ({
  projectNumber,
  title,
  description,
  subDescription,
  thumbnailImg,
  projectDemoGif,
  liveSiteLink,
  gitHubLink,
  detailsFirst,
}) => {
  const [showDemo, setShowDemo] = useState(false);
  const [demoGif, setDemoGif] = useState(projectDemoGif);

  const renderThumbnail = (
    <>
      <h2 className="d-inline d-sm-none" style={{ color: "#47177F" }}>
        {projectNumber} {title}
      </h2>
      <div
        className="col-sm-6 hoverImage  mb-sm-4"
        onMouseEnter={() => {
          setTimeout(() => {
            setDemoGif(projectDemoGif);
          }, 0);
          setShowDemo(true);
        }}
        onMouseLeave={() => {
          setDemoGif("");
          setShowDemo(false);
        }}
        onTouchStart={() => {
          setTimeout(() => {
            setDemoGif(projectDemoGif);
          }, 0);
          setShowDemo(true);
        }}
        onTouchMove={() => {
          setDemoGif("");
          setShowDemo(false);
        }}
        style={{ width: "636px", height: "360px" }}
      >
        {showDemo ? (
          <img
            src={demoGif}
            alt={title}
            draggable="false"
            className="img-fluid"
            style={{ borderRadius: "5px" }}
          />
        ) : (
          <img
            src={thumbnailImg}
            alt={title}
            draggable="false"
            className="img-fluid"
            style={{
              borderRadius: "5px",
              filter: "sepia(100%) hue-rotate(190deg) saturate(500%)",
              opacity: "0.7",
            }}
          />
        )}
      </div>
    </>
  );

  const renderDetails = (
    <div
      className={`col-sm-4 text-sm-${
        detailsFirst ? "end" : "start"
      } text-center`}
      style={{
        color: "#47177F",
        textAlign: detailsFirst ? "right" : "left",
        zIndex: "999",
      }}
    >
      <h4 className="d-none d-sm-inline">{projectNumber}</h4>
      <a
        href="https://manga-shoppu.onrender.com/"
        className="mx-2 text-decoration-none text-reset"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="d-none d-sm-block">{title}</h2>
      </a>
      <div>
        <p
          className={detailsFirst ? "floatTextBoxRight" : "floatTextBox"}
          style={{
            background: "#716FD8",
            padding: "1rem",
            borderRadius: "5px",
            color: "white",
          }}
        >
          {description}
        </p>
        <p>{subDescription}</p>
        <p>
          <a
            href={gitHubLink}
            className="mx-2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./images/svg/github.svg"
              width={25}
              alt="Github"
              draggable="false"
              className="linkButtons"
            />
          </a>
          <a
            href={liveSiteLink}
            className="mx-2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./images/svg/demo.svg"
              width={25}
              alt="Live Site"
              draggable="false"
              className="linkButtons"
            />
          </a>
        </p>
      </div>
    </div>
  );

  return (
    <div
      className="row d-flex d-flex justify-content-center mt-5"
      data-aos={detailsFirst ? "fade-left" : "fade-right"}
      data-aos-duration="1000"
    >
      {detailsFirst ? (
        <>
          {renderDetails}
          {renderThumbnail}
        </>
      ) : (
        <>
          {renderThumbnail}
          {renderDetails}
        </>
      )}
    </div>
  );
};

export default ProjectPreview;
