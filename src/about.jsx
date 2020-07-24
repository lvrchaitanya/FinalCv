import React from "react";
import "./styles.css";
import Third from "./third";
import Skill from "./skills";

export default function Middle() {
  return (
    <div>
      <Third
        colour={"#FB4463"}
        head={"APP DEVLOPMENT"}
        body={
          "I'm a App developer and i have experience in developing app for both IOS an Android using FLUTTER."
        }
        pic={
          "https://i.ibb.co/G9QZ9q9/Illustration-Mobile-Apps-Development-the-concept-of-men-is-making-applications-using-code-programmin.jpg"
        }
      />
      <Third
        colour={"#6776CD"}
        head={"WEB DEVLOPMENT"}
        body={
          "I'm also a Web developer and have experience in HTMl CSS JavaScript and other frameworks like BootStrap and jQuery as well."
        }
        pic={"https://i.ibb.co/Hr1qYvz/programming.jpg"}
      />
      <Third
        colour={"#313131"}
        head={"COMPETATIVE PROGRAMING"}
        body={
          " I do a lot of competative codeing as well and I'm good at solving the questions with time limit ."
        }
        pic={"https://i.ibb.co/XJGhNjp/Programming1.png"}
      />

      <Skill />
    </div>
  );
}
