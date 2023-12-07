import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.videoWrapper}>
          <video autoPlay loop muted playsInline className={styles.video}>
            <source
              src="/images/pexels-weldi-studio-design-8675554 (1080p).mp4"
              type="video/mp4"
            />
            Your browser doesnt support video!
          </video>
        </div>
        <div>
          <nav className={styles.navList}>
            <a href="#Skills" className={styles.navItem}>
              About
            </a>
            <a href="#Projects" className={styles.navItem}>
              Projects
            </a>
            <a href="#messageForm" className={styles.navItem}>
              connect
            </a>
          </nav>
        </div>
        <div className={styles.headerSecondChild}>
          <div className={styles.headerDesc}>
            {/* <h1 className={styles.myName}>Manizha khorram</h1> */}
            <h3 className={styles.desc}>Hello there!</h3>
            <h3 className={styles.desc}>I am a full-stack web developer</h3>
            <p className={styles.descWelcom}>
              🚀Welcome to my world of web development magic.
              <br /> Explore my journey as a full-stack wizard,
              <br />
              weaving tech tales that captivate and inspire.
              <br /> Let's build something awesome together! 💻✨
            </p>
          </div>

          <div>
            <img src="/images/My Photo.png" className={styles.myImage}></img>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
