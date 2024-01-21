import React, { useEffect } from "react";
import "./style.scss";
import Card from "./cards/Card";
import CardR from "./cardsright/CardR";
import { useSelector } from "react-redux";
import Card3 from "./card3/Card";
const Project = () => {
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    if (theme == "dark") {
      document.getElementById("projects").style.backgroundColor = "#161616";
    } else {
      document.getElementById("projects").style.backgroundColor = "white";
    }
  }, [theme]);
  return (
    <div className="projects" id="projects">
      <h1>My Work</h1>
      <div className="cards">
        <Card />
        <CardR />
        <Card3 />
      </div>
    </div>
  );
};

export default Project;
