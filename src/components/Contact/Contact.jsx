import React, { useEffect } from "react";
import "./style.scss";
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useSelector } from "react-redux";
const Contact = () => {
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
  const theme = useSelector((store) => store.theme.theme);
  useEffect(() => {
    if (theme == "dark") {
      document.getElementById("contact").style.backgroundColor = "#161616";
      document.getElementById("contact").style.color = "white";
    } else {
      document.getElementById("contact").style.backgroundColor = "white";
      document.getElementById("contact").style.color = "#161616";
    }
  }, [theme]);
  return (
    <div className="contact">
      <div className="container" id="contact">
        <span className="big-circle" id="circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title" style={{ margin: "20px" }}>
              Let's get in touch
            </h3>

            <div className="info">
              <div className="information">
                <MdLocationPin size={20} />
                <p style={{ paddingLeft: "10px" }}>
                  Turner Road,Dehradun,Uttrakhand,India
                </p>
              </div>
              <div className="information">
                <MdOutgoingMail size={20} />
                <p style={{ paddingLeft: "10px" }}>lohaniayush97@gmail.com</p>
              </div>
              <div className="information">
                <IoCall size={20} />
                <p style={{ paddingLeft: "10px" }}>+918439915909</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayush-lohani-091974263/"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  target="_blank"
                >
                  <FaLinkedin size={35} />
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
                  <FaGithub size={35} />
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
                  <FaInstagramSquare size={35} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=lohaniayush97@gmail.com&su=SUBJECT&body=BODY&bcc=ayushlohani2004@example.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  target="_blank"
                >
                  <MdOutgoingMail size={40} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <button className="btn">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=lohaniayush97@gmail.com&su=SUBJECT&body=BODY&bcc=ayushlohani2004@example.com"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  target="_blank"
                >
                  Send
                </a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
