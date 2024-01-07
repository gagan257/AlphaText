import React, { useState } from "react";

export default function About(props) {
  return (
    <div
      className="card w-100 shadow-lg mt-5 text-center"
      style={{
        backgroundColor: props.mode === "dark" ? "grey" : "grey",
        color: props.mode === "dark" ? "black" : "black",
        border: props.mode === "dark" ? "2px solid white" : "2px solid black",
      }}
    >
      <div
        className="card-body"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "black" : "black",
        }}
      >
        <h5 className="card-title">About Developer</h5>
        <p className="">
          Hi! I am <strong>Gagan Arora</strong>, a Full Stack Web Developer and
          a Computer Science Engineer. I am a passionate coder and a self-taught
          programmer. I love to code in{" "}
          <strong>MERN Technologies and C++</strong>. 👋 Welcome to my React
          App! Explore, enjoy, and let the coding adventures begin! 🚀
          #ReactMagic ✨
        </p>
      </div>
      <ul
        className="list-group list-group-flush"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "#0DCAF0" : "black",
        }}
      >
        <li
          className="list-group-item"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "black" : "black",
          }}
        >
          Github @gagan257
        </li>
        <li
          className="list-group-item"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "Black" : "black",
          }}
        >
          gagan257.tech
        </li>
      </ul>
      <div
        className="card-body"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <a href="https://gagan257.tech/public/feedback/" className="card-link">
          Feedback
        </a>
        <a href="https://contact-gagan.netlify.app/" className="card-link">
          Contact Me!
        </a>
      </div>
    </div>
  );
}
