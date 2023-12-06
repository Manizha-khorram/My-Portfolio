import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = "https://formspree.io/f/moqogjbb";

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        // Reset the form fields after successful submission
        setMessage("");
        setName("");
        setEmail("");
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <div className={styles.formSection} id="messageForm">
        <div>
          <h2 className={styles.title}>Let's Connect!</h2>
          <p className={styles.formText}>
            Excited to connect and explore opportunities together!
            <br />
            Whether it's discussing projects, sharing ideas,
            <br />
            or just chatting tech, I'm all ears. Drop me a<br />
            line via email or connect on LinkedIn.
            <br />
            Can't wait to connect with you!
          </p>
          <a href="https://github.com/Manizha-khorram">
            <img src="/images/github.png" className={styles.img} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/manizha-khorram/">
            <img src="/images/linkedin.png" className={styles.img} alt="" />
          </a>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Your form inputs and button */}
          <div className={styles.formChild}>
            <input
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
            <input
              name="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <input
              name="Message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
