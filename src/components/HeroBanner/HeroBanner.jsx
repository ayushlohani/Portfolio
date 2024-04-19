import React, { useEffect, useRef } from "react";
import "./style.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
gsap.registerPlugin(ScrollTrigger);

const HeroBanner = () => {
  const picmove = useRef();
  const headop = useRef();
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    const e1 = picmove.current;
    const e2 = headop.current;

    gsap.fromTo(
      e1,
      { left: "100%" }, // Enclose the percentage value in quotes
      {
        left: "2%", // Enclose the percentage value in quotes
        duration: 2000,
        scrollTrigger: {
          trigger: e1,
          start: "top center", // Adjust this as needed
          end: "bottom", // Adjust this as needed
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      e2,
      { opacity: 1 },
      {
        opacity: 0,
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
      document.getElementById("Hero").style.backgroundColor = "#161616";
      document.getElementById("Hero").style.color = "white";
    } else {
      document.getElementById("Hero").style.backgroundColor = "transparent";
      document.getElementById("Hero").style.color = "black";
    }
  }, [theme]);
  return (
    <div className="HeroBanner" id="Hero">
      <div className="left-sec" ref={headop}>
        <div className="head">
          Hi, I'm <span className="name">Ayush</span>
        </div>
        <div className="head">
          Web <span className="name">Developer,</span>
        </div>
        <p>
          If your buisness is not on the internet,then your buisness will be out
          of buisness
        </p>
        <div className="buttons">
          <a
            href="https://drive.google.com/file/d/129QapKWTKmvwxJzzKye6MEKU8RAlByec/view?usp=drive_link"
            target="_blank"
          >
            <button className="butn active">Download CV</button>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lohaniayush97@gmail.com&su=SUBJECT&body=BODY&bcc=ayushlohani2004@example.com"
            target="_blank"
          >
            <button className="butn">Get in Touch</button>
          </a>
        </div>
      </div>
      <div className="right-sec" ref={picmove}>
        <div className="pic">
          <img src="prof.gif" alt="Profile"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
