import React from "react";

export default function Footer(props) {
  return (
    <footer
      className={`text-center text-${
        props.mode === "dark" ? "white" : "black"
      } bg-${props.mode === "dark" ? "black" : "info"} pb-2 pt-1`}
    >
      This App was build using React by {"Gagan Arora"}
    </footer>
  );
}
