import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "#212529",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const changeTheme = () => {
    if (myStyle.color === "#212529") {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "#212529",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="card w-100 shadow-lg mt-5 text-center" style={myStyle}>
      <div className="card-body" style={myStyle}>
        <h5 className="card-title">About Developer</h5>
        <p className="card-text">
          Hi! I am <strong>Gagan Arora</strong>, a Full Stack Web Developer and
          a Computer Science Engineer. I am a passionate coder and a self-taught
          programmer. I love to code in{" "}
          <strong>MERN Technologies and C++</strong>. 👋 Welcome to my React
          App! Explore, enjoy, and let the coding adventures begin! 🚀
          #ReactMagic ✨
        </p>
      </div>
      <ul className="list-group list-group-flush" style={myStyle}>
        <li className="list-group-item" style={myStyle}>
          Github @gagan257
        </li>
        <li className="list-group-item" style={myStyle}>
          gagan257.tech
        </li>
      </ul>
      <div className="card-body" style={myStyle}>
        <a href="https://gagan257.tech/public/feedback/" className="card-link">
          Feedback
        </a>
        <a href="https://contact-gagan.netlify.app/" className="card-link">
          Contact Me!
        </a>
      </div>
      <button onClick={changeTheme} className="btn btn-primary">
        {btnText}
      </button>
    </div>
  );
}
