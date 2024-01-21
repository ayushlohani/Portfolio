import React, { useEffect } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
const Card3 = () => {
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    if (theme == "dark") {
      document.getElementById("card3").style.backgroundColor = "#161616";
      document.getElementById("card3").style.color = "white";
    } else {
      document.getElementById("card3").style.backgroundColor = "white";
      document.getElementById("card3").style.color = "#161616";
    }
  }, [theme]);
  return (
    <div className="card" id="card3">
      <div className="pic">
        <a
          href="https://jade-peony-857826.netlify.app/"
          style={{ textDecoration: "none", color: "inherit" }}
          target="_blank"
        >
          <img src="Ret.png"></img>
        </a>
      </div>
      <div className="write">
        <div className="project-head">
          <a
            href="https://jade-peony-857826.netlify.app/"
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
          >
            RetiredDashboard
          </a>
        </div>
        <div className="project-info">
          <a
            href="https://jade-peony-857826.netlify.app/"
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
          >
            Welcome to Retirement Investment Insights, a user-friendly web page
            designed to empower retired individuals with valuable information on
            their investments. Leveraging the robust capabilities of React.js
            and Chart.js, this interactive platform provides a visual
            representation of investment portfolios, allowing retirees to make
            informed financial decisions with confidence.
          </a>
        </div>
        <div className="tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJs</span>
          <span>ChartJs</span>
        </div>
      </div>
    </div>
  );
};

export default Card3;
