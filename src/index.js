import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Middle from "./middle";
import Third from "./third";
import pic1 from "./appdev.png";
import pic2 from "./programming.png";
import pic3 from "./Programming1.png";
import Nav from "./navbar";
import Fot from "./fotter";
import Skill from "./skills";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <section id="link">
      <Middle />
    </section>
    <Third
      colour={"#0092D9"}
      head={"APP DEVLOPMENT"}
      body={
        "I'm a App developer and i have experience in developing app for both IOS an Android using FLUTTER."
      }
      pic={pic1}
    />
    <Third
      colour={"#47CE65"}
      head={"WEB DEVLOPMENT"}
      body={
        "I'm also a Web developer and have experience in HTMl CSS JavaScript and other frameworks like BootStrap and jQuery as well."
      }
      pic={pic2}
    />
    <Third
      colour={"#F58330"}
      head={"COMPETATIVE PROGRAMING"}
      body={
        " I do a lot of competative codeing as well and I'm good at solving the questions with time limit ."
      }
      pic={pic3}
    />
    <Skill />
    <Fot />
  </React.StrictMode>,
  rootElement
);
