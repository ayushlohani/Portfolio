import React, { useEffect } from "react";
import "./style.scss";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GiHamburgerMenu, GiBoomerangCross } from "react-icons/gi";
const Header = ({ theme, handletheme }) => {
  const [Show, setShow] = useState(false);
  const handleShow = (e) => {
    setShow(!Show);
  };
  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("header").style.backgroundColor = "#161616";
      document.getElementById("header").style.color = "azure";
      if (Show) {
        document.getElementById("nav-bar-mob").style.backgroundColor =
          "#161616";
      }
    } else {
      document.getElementById("header").style.backgroundColor = "transparent";
      document.getElementById("header").style.color = "black";
      if (Show) {
        document.getElementById("nav-bar-mob").style.backgroundColor =
          "#f7f7f7";
      }
    }
  }, [theme, Show]);
  return (
    <div className="header" id="header">
      <div className="ham" onClick={handleShow}>
        {!Show && <GiHamburgerMenu size={35} className="ham-burger" />}
        {Show && <RxCross2 size={35} className="Cross" />}
      </div>
      <ul className="nav-bar">
        <li className="nav-link active">Home</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Projects</li>
        <li className="nav-link">Contact</li>
      </ul>
      {Show && (
        <ul className="nav-bar-mob" id="nav-bar-mob">
          <li className="nav-link active">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Projects</li>
          <li className="nav-link">Contact</li>
        </ul>
      )}
      <div className="theme" id="theme" onClick={handletheme}>
        {theme === "dark" && <MdLightMode size={25} className="light" />}
        {theme === "light" && <MdDarkMode size={25} className="dark" />}
      </div>
    </div>
  );
};

export default Header;
