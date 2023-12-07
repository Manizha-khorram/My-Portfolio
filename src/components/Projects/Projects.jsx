import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  const [showInfo, setShowInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("one");

  useEffect(() => {
    console.log("tow");

    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Manizha-khorram/repos"
        );
        if (!response.ok) {
          throw new Error("No Projects", response.json());
        }

        const data = await response.json();
        console.log("data", data);

        setShowInfo(data);
        setLoading(false);
      } catch (err) {
        console.log("Error has occured look!", err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <h2 id="Projects">My Projects</h2>
      <div className={styles.parent_project}>
        <div className={styles.live_Projects}>
          <a href=" https://shelf-share-app.onrender.com/"> Shelf Share</a>
          <img src="/images/ShelfShare.png" className={styles.projectImage} />
          <p>
            ShelfShare is an innovative application <br /> that provides a
            platform <br /> for sharing books within the community.
          </p>
        </div>
        <div className={styles.live_Projects}>
          <a href="https://art-collectibles.onrender.com">Art Collectible</a>
          <img
            src="/images/ArtCollectibles.png"
            className={styles.projectImage}
          />
          <p>
            {" "}
            ArtCollectible is Empowering artists to showcase
            <br /> and sell their creations, connecting art enthusiasts
            worldwide <br /> in a secure platform managed by efficient admin
            support.
          </p>
        </div>
        <div className={styles.live_Projects}>
          <a href=" https://shelf-share-app.onrender.com/"> Todo APP Manager</a>
          <img src="/images/TodoAPP.png" className={styles.projectImage} />
          <p>
            ShelfShare is an innovative application <br /> that provides a
            platform <br /> for sharing books within the community.
          </p>
        </div>
        <div className={styles.live_Projects}>
          <a href="https://hack-ctds-style.onrender.com/">CTD Style</a>
          <img
            src="/images/Code the Dream style hack.png"
            className={styles.projectImage}
          />
          <p>
            Implemented React to elevate the design <br /> and user experience
            of the Code the Dream platform, <br /> enhancing its frontend with
            innovative styling solutions.
          </p>
        </div>
      </div>
      {/* <h3>Github Projects</h3>
      <div className={styles.otherProjectsParents}>
        {loading ? (
          <h3>...loading</h3>
        ) : (
          <ul className={styles.otherProjects}>
            {showInfo.map((project) => (
              <li key={project.id}>
                <a href={project.html_url} className={styles.gitProjects}>
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </>
  );
};

export default Projects;
