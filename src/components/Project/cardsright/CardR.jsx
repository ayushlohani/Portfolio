import React, { useEffect } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
const CardR = () => {
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    if (theme == "dark") {
      document.getElementById("cardr").style.color = "white";
    }
  }, [theme]);
  return (
    <div className="cardr" id="cardr">
      <div className="pic">
        <a
          href="https://groomup.netlify.app/"
          style={{ textDecoration: "none", color: "inherit" }}
          target="_blank"
        >
          <img src="groomUp.png"></img>
        </a>
      </div>
      <div className="write">
        <div className="project-head">
          <a
            href="https://groomup.netlify.app/"
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
          >
            Groom Up
          </a>
        </div>
        <div className="project-info">
          <a
            href="https://groomup.netlify.app/"
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
          >
            Welcome to our React Responsive E-Commerce Store, a cutting-edge
            single-page application that seamlessly integrates React.js, Redux,
            React Router for dynamic navigation, Bootstrap for a sleek and
            responsive design, and API referencing to bring you a delightful
            online shopping experience.
          </a>
        </div>
        <div className="tech">
          <span>HTML</span>
          <span>BootStrap</span>
          <span>JavaScript</span>
          <span>ReactJs</span>
          <span>React-Redux</span>
        </div>
      </div>
    </div>
  );
};

export default CardR;
