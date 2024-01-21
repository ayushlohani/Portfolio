import React, { useEffect } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
const Card = () => {
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    if (theme == "dark") {
      document.getElementById("card").style.backgroundColor = "#161616";
      document.getElementById("card").style.color = "white";
    } else {
      document.getElementById("card").style.backgroundColor = "white";
      document.getElementById("card").style.color = "#161616";
    }
  }, [theme]);
  return (
    <div className="card" id="card">
      <div className="pic">
        <a
          href="https://dwatche.netlify.app/"
          style={{ textDecoration: "none", color: "inherit" }}
          target="_blank"
        >
          <img src="projectCard.png"></img>
        </a>
      </div>
      <div className="write">
        <a
          href="https://dwatche.netlify.app/"
          style={{ textDecoration: "none", color: "inherit" }}
          target="_blank"
        >
          <div className="project-head">DWatch</div>
        </a>
        <div className="project-info">
          <a
            href="https://dwatche.netlify.app/"
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
          >
            Welcome to the React Responsive Movie & TV Show Explorer, a dynamic
            web application designed to immerse you in the world of cinema and
            television. Leveraging the power of React.js, Redux for state
            management, React Router for seamless navigation, and SCSS for
            elegant styling, this application is a testament to the synergy
            between cutting-edge web technologies.
          </a>
        </div>
        <div className="tech">
          <span>HTML</span>
          <span>SCSS</span>
          <span>JavaScript</span>
          <span>ReactJs</span>
          <span>Redux</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
