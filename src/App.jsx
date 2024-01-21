import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "./store/themeslice";

function App() {
  const theme = useSelector((store) => store.theme);
  const dipatch = useDispatch();
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const onMouseMove = (e) => {
    setCursorPosition({ top: e.clientY - 20, left: e.clientX - 20 });
  };
  const handletheme = () => {
    dipatch(themeAction.changetheme());
  };
  return (
    <div className="app" onMouseMove={onMouseMove}>
      <Header theme={theme.theme} handletheme={handletheme} />
      <HeroBanner />
      <div className="scroll-page">
        <About />
      </div>
      <div className="pro-con">
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
