import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";
import Developer from "./components/Developer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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
    <>
      <Router>
        <Navbar
          title="AlphaText"
          aboutbtn="Developer"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter Your Text" mode={mode} />}
          />
          <Route path="/developer" element={<Developer mode={mode} />} />
        </Routes>
      </Router>
      <Footer mode={mode} />
    </>
  );
}

export default App;
