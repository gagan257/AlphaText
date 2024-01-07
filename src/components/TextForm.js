import React, { useState } from "react"; // imr

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  const handleDLClick = () => {
    setText("");
  };
  const handleCPClick = () => {
    const textBox = document.getElementById("text-box");
    textBox.select();
    document.execCommand("copy");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCamelCase = () => {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
  };
  const handleSnakeCase = () => {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].toLowerCase();
    }
    setText(newText.join("_"));
  };
  const handleKebabCase = () => {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].toLowerCase();
    }
    setText(newText.join("-"));
  };
  const handleUpperKebabCase = () => {
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].toUpperCase();
    }
    setText(newText.join("-"));
  };
  return (
    <>
      <div
        className="container pb-2 rounded"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="text-center">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
              cursor: "default",
              border:
                props.mode === "dark" ? "2px solid white" : "2px solid black",
            }}
            className="form-control shadow-lg"
            value={text}
            id="text-box"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-success shadow-lg" onClick={handleUpClick}>
            Convert to UPPERCASE
          </button>
          <button
            className="btn btn-primary mx-2 shadow-lg"
            onClick={handleLoClick}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-warning text-white shadow-lg"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
            onClick={handleCamelCase}
            className="btn btn-success text-white shadow-lg"
          >
            Convert to Camel Case
          </button>
          <button
            onClick={handleSnakeCase}
            className="btn btn-info text-white mx-2 shadow-lg"
          >
            Convert to Snake Case
          </button>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
            onClick={handleKebabCase}
            className="btn btn-dark text-white mx-2 shadow-lg"
          >
            Convert to kebab-case
          </button>
          <button
            onClick={handleUpperKebabCase}
            className="btn btn-dark text-white shadow-lg"
          >
            Convert to UPPER-KEBAB-CASE
          </button>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button className="btn btn-danger shadow-lg" onClick={handleDLClick}>
            Delete All
          </button>
          <button
            className="btn btn-info text-white mx-2 shadow-lg"
            onClick={handleCPClick}
          >
            Copy All
          </button>
        </div>
      </div>
      <div
        className="container my-3 text-center rounded shadow-lg"
        style={{
          border: props.mode === "dark" ? "2px solid white" : "2px solid black",
        }}
      >
        <h2
          style={{
            color: props.mode === "dark" ? "#212529" : "black",
          }}
        >
          Text Summary
        </h2>
        <p style={{ color: props.mode === "dark" ? "#212529" : "black" }}>
          Currently text has{" "}
          <span className="text-danger">
            {text.length > 0 ? text.split(" ").length : 0}
          </span>{" "}
          Words and <span className="text-danger">{text.length}</span>{" "}
          Characters
        </p>
        <h4 style={{ color: props.mode === "dark" ? "#212529" : "black" }}>
          <span className="text-success">
            {Math.round(0.08 * text.split(" ").length)}
          </span>{" "}
          Minutes Read
        </h4>
      </div>
    </>
  );
}
