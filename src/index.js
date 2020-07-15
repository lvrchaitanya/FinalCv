import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Middle from "./middle";
import Third from "./third";

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
      pic={
        "https://vrl-eu-cdn.wetransfer.net/ivise/eyJwaXBlbGluZSI6W1sic3JnYiIse31dLFsiYXV0b19vcmllbnQiLHt9XSxbImdlb20iLHsiZ2VvbWV0cnlfc3RyaW5nIjoiMTI4MHg4MDA_In1dLFsic2hhcnBlbiIseyJyYWRpdXMiOjAuNzUsInNpZ21hIjowLjV9XSxbImV4cGlyZV9hZnRlciIseyJzZWNvbmRzIjo2MDQ4MDB9XV0sInNyY191cmwiOiJzMzovL3dldHJhbnNmZXItZXUtcHJvZC1vdXRnb2luZy9kMTRhNjQ2OTc1NzQ2ZGE0YjNhYWQ1ZDk4YTM2NjczMjIwMjAwNzE1MTg0MDE2LzA2N2QzYWUzMWEzOTIyZThmNWZhMTg4MzA1MmRhYjk2ODE4YWY5NTAifQ/29094fe811078062207fa6e674ec103650d91fb30c71dc7860072b2c3d93b20d"
      }
    />
    <Third
      colour={"#47CE65"}
      head={"WEB DEVLOPMENT"}
      body={
        "I'm also a Web developer and have experience in HTMl CSS JavaScript and other frameworks like BootStrap and jQuery as well."
      }
      pic={"https://i.ibb.co/Hr1qYvz/programming.jpg"}
    />
    <Third
      colour={"#F58330"}
      head={"COMPETATIVE PROGRAMING"}
      body={
        " I do a lot of competative codeing as well and I'm good at solving the questions with time limit ."
      }
      pic={"https://i.ibb.co/XJGhNjp/Programming1.png"}
    />
    <Skill />
    <Fot />
  </React.StrictMode>,
  rootElement
);
