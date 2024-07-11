import React from "react";
import ProjectPreview from "./shared/ProjectPreview";

const Projects = () => {
  const featuredProjects = [
    {
      projectNumber: ": 3",
      title: "Pokemon Quizzr",
      description:
        "Pokemon Quizzr is a web quiz app that lets you browse and search all 898 pokemon on the Pokedex, play a quiz game from any pokemon generation of your choice, and tracks your score to be display on the Leaderboard. To add, it is accessible, interactive and responsive on any device!",
      subDescription:
        "ReactJS | Firebase | Firestore | Pokemon API | Bootstrap",
      thumbnailImg: "./images/projects/p3.webp",
      projectDemoGif: "./images/projects/srp3.gif",
      liveSiteLink: "https://pokemon-quizzr.netlify.app/",
      gitHubLink: "https://github.com/kendlc/Project3-Pokequizzr",
      detailsFirst: false,
    },
    {
      projectNumber: ": 2",
      title: "Expense Trackr",
      description:
        "In this group project, the team utilize collaborated to make an Expense Trackr application that helps you to organize your finances keeping track of all your expenses and incomes. It was built to have web and mobile responsiveness on all devices.",
      subDescription: "ReactJS | Ruby on Rails | PostgreSQL | Bootstrap | CSS",
      thumbnailImg: "./images/projects/p2.webp",
      projectDemoGif: "./images/projects/srp2.gif",
      liveSiteLink: "https://expense-trackr0.netlify.app/",
      gitHubLink: "https://github.com/kendlc/Project2-Expense-Trackr-Client",
      detailsFirst: true,
    },
    {
      projectNumber: ": 1",
      title: "Manga-Shoppu",
      description:
        "Manga-shoppu is an e-commerce web application project that allows users to purchase different kind of mangas. Users can add products to their carts, have a subtotal and total costs on their cart and checkout. While admin users can create and add products.",
      subDescription: "Ruby on Rails | PostgreSQL | Jikan API | HTML | CSS",
      thumbnailImg: "./images/projects/p1.webp",
      projectDemoGif: "./images/projects/srp1.gif",
      liveSiteLink: "https://manga-shoppu.onrender.com/",
      gitHubLink: "https://github.com/kendlc/Project1-Manga-Shoppu",
      detailsFirst: false,
    },
    {
      projectNumber: ": 0",
      title: "Sumi-e TicTacToe",
      description:
        "In making this project, I utilised Javascript, CSS, and jQuery to make a fun interactive TicTacToe game that lets you play 1v1 and demonstrates a nice responsive UI.",
      subDescription: "jQuery | Javascript | HTML | CSS",
      thumbnailImg: "./images/projects/p0.webp",
      projectDemoGif: "./images/projects/srp0.gif",
      liveSiteLink: "https://kendlc.github.io/Project0-Tictactoe/",
      gitHubLink: "https://kendlc.github.io/Project0-Tictactoe/",
      detailsFirst: true,
    },
  ];

  return (
    <div className="wrap">
      <div id="projects" className="container" style={{ minHeight: "100vh" }}>
        <div className="row">
          <div className="col-sm-7" style={{ marginTop: "10vh" }}>
            <h1
              className="display-4 d-flex justify-content-center justify-content-sm-center mb-5"
              style={{ color: "#C7D0D8" }}
            >
              Featured Projects
            </h1>
          </div>
        </div>
        <img
          src="./images/circle2.png"
          alt="circle2"
          draggable="false"
          className="d-none d-sm-block circle3"
        />
        {featuredProjects.map(
          ({
            projectNumber,
            title,
            description,
            subDescription,
            thumbnailImg,
            projectDemoGif,
            liveSiteLink,
            gitHubLink,
            detailsFirst,
          }) => (
            <ProjectPreview
              key={projectNumber}
              projectNumber={projectNumber}
              title={title}
              description={description}
              subDescription={subDescription}
              thumbnailImg={thumbnailImg}
              projectDemoGif={projectDemoGif}
              liveSiteLink={liveSiteLink}
              gitHubLink={gitHubLink}
              detailsFirst={detailsFirst}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
