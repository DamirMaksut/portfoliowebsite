import React, { Component } from "react";
import profilePic from "../assets/img/profilepic.png";

export const About = () => {

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilePic}
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p style={{ lineHeight: "2.5rem" }}>{"I'm Damir Maksut, a first-year student at Bocconi University, majoring in Computer Science, Economics, and Business Management. Originally from Almaty, Kazakhstan, my passion lies in data science and AI, driven by a desire to witness their transformative potential in improving our world. Eager to explore their applications, I'm committed to leveraging my studies to contribute meaningfully to technological innovation and societal progress."}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address" style={{ lineHeight: "2.5rem" }}>
                <span>{"Damir Maksut"}</span>
                <span>{"+3336024799"}</span>
                <br />
                <span>{"damir.maksut@jeme.it"}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href={"https://drive.google.com/file/d/13jKbDeyo1FYjIRKmiX71RRoC7FfOHstr/view?usp=sharing"
                        }
                  className="button"
                  download
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
