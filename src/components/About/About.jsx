import React from "react";
import "./style.scss";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import { MdOutgoingMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const headop = useRef();
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    const e2 = headop.current;
    gsap.fromTo(
      e2,
      { opacity: 1 },
      {
        opacity: 0.5,
        duration: 1000,
        scrollTrigger: {
          trigger: e2,
          start: "top ", // Adjust this as needed
          end: "center ", // Adjust this as needed
          scrub: true,
        },
      }
    );
  }, []);
  useEffect(() => {
    if (theme == "dark") {
      document.getElementById("right").style.backgroundColor = "#161616";
      document.getElementById("about").style.color = "white";
    } else {
      document.getElementById("right").style.backgroundColor = "white";
      document.getElementById("about").style.color = "black";
    }
  }, [theme]);
  return (
    <div className="about" id="about">
      <div className="left"></div>
      <div className="right about-pc" id="right" ref={headop}>
        <h2>About me</h2>
        <p>
          Hello there! I'm Ayush Lohani, a passionate programmer and web
          developer with a love for crafting elegant and efficient digital
          solutions. With a keen eye for detail and a commitment to creating
          user-friendly experiences, I strive to bring ideas to life through the
          power of code.
          <br />I thrive on challenges and view problems as opportunities for
          growth. Whether it's optimizing code for performance, troubleshooting
          complex issues, or brainstorming innovative features, I approach each
          task with enthusiasm and a determination to deliver high-quality
          solutions.
        </p>
        <div className="connect-media">
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ayush-lohani-091974263/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                target="_blank"
              >
                <FaLinkedin size={35} style={{ marginRight: "5px" }} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ayushlohani"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                target="_blank"
              >
                <FaGithub size={35} style={{ marginRight: "5px" }} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/alohani_04?igsh=bnVrY2I0d3F1czU1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                target="_blank"
              >
                <FaInstagramSquare size={35} style={{ marginRight: "5px" }} />{" "}
                <span>Instagram</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lohaniayush97@gmail.com&su=SUBJECT&body=BODY&bcc=ayushlohani2004@example.com"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MdOutgoingMail size={40} style={{ marginRight: "5px" }} />{" "}
                <span>GMail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
