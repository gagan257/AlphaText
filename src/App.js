import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";
// import About from "./components/About";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div>
      <Navbar
        title="AlphaText"
        aboutbtn="About Creator"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-4">
        <TextForm heading="Enter Your Text" mode={mode} />
      </div>
      <Footer mode={mode} />
    </div>
  );
}

export default App;
