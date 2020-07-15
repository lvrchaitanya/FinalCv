import React from "react";
import "./styles.css";
import mylogo from "./mylogo.png";
export default function App() {
  return (
    <div className="App">
      <h1> Hi, I'm Chaitanya </h1>
      <img src={mylogo} alt="hellow" height={200} />
      <h2> Web , App Devloper</h2>
    </div>
  );
}
