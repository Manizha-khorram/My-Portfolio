import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <div className={styles.skills}>
        <h2 className={styles.skillHeader} id="Skills">
          About Me
        </h2>
        <div className={styles.skillContainer}>
          <img src="/images/skills.jpg" className={styles.skillImage}></img>
          <div>
            <p className={styles.aboutMeText}>
              I am a passionate full-stack Software Engineer
              <br />
              committed to developing interactive and responsive
              <br />
              web applications. I thrive in collaborative environments,
              <br />
              eagerly working with peers to create exceptional
              <br />
              applications. I strongly believe in technology's potential
              <br />
              to translate ideas into reality and am dedicated to delivering
              <br />
              top-notch solutions that address user needs.
              <br />
              My expertise spans various technologies, including:
            </p>
            <ul className={styles.skillLists}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node JS</li>
              <li>Express JS</li>
              <li>React JS</li>
              <li>Python</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Mongo DB</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
