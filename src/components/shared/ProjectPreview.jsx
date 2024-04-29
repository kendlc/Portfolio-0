import React, { useEffect, useRef, useState } from "react";
import { addImageProcess } from "../../helpers";

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

  const divRef = useRef(null);
  const divRef1 = useRef(null);

  useEffect(() => {
    addImageProcess(projectDemoGif);
    const checkCenter = () => {
      const divRect = divRef.current.getBoundingClientRect();
      const divRect1 = divRef1.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const divCenterY = divRect.top + divRect.height / 2;
      const divCenterY1 = divRect1.top + divRect1.height / 2;
      const viewportCenterY = viewportHeight / 2;

      const threshold = 200;

      const isVerticallyCentered =
        Math.abs(divCenterY - viewportCenterY) <= threshold;
      const isVerticallyCentered1 =
        Math.abs(divCenterY1 - viewportCenterY) <= threshold;

      setShowDemo(isVerticallyCentered || isVerticallyCentered1);
    };

    checkCenter();
    window.addEventListener("scroll", checkCenter);
    window.addEventListener("resize", checkCenter);

    return () => {
      window.removeEventListener("scroll", checkCenter);
      window.removeEventListener("resize", checkCenter);
    };
  }, []);

  const renderThumbnail = (isForMobile, divRef) => (
    <>
      <h2
        className={isForMobile ? "d-inline d-sm-none" : "d-none"}
        style={{ color: "#47177F" }}
      >
        {projectNumber} {title}
      </h2>
      <div
        ref={divRef}
        className={`col-sm-6 hoverImage  mb-sm-4 ${
          isForMobile ? "d-inline d-sm-none" : "d-none d-sm-inline"
        }`}
        style={{ width: "636px", height: "360px" }}
      >
        {showDemo ? (
          <img
            src={projectDemoGif}
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
    <>
      {renderThumbnail(true, divRef)}
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
          href={liveSiteLink}
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
    </>
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
          {renderThumbnail(false, divRef1)}
        </>
      ) : (
        <>
          {renderThumbnail(false, divRef1)}
          {renderDetails}
        </>
      )}
    </div>
  );
};

export default ProjectPreview;
