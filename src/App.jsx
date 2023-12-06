import React from "react";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Form from "./components/Form/Form";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.bodyContent}>
        <Skills />
        <Projects />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;
