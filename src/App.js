import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";
// import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar title="AlphaText" aboutbtn="About Creator" />
      <div className="container my-4">
        <TextForm heading="Enter Your Text" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
