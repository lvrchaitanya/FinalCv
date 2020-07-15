import React from "react";
import "./styles.css";

export default function Skill(props) {
  return (
    <section id="skills" class="Skills" style={{ backgroundColor: "#161616" }}>
      <div class="skilltitle">
        <h1 align="center">SKILLS</h1>
      </div>
      <div class="row">
        <div class="column">
          <ul>
            <li id="skillli" class="html">
              C/C++
            </li>
            <li id="skillli" class="css">
              PYTHON
            </li>
            <li id="skillli" class="js">
              Java
            </li>
            <li id="skillli" class="ng">
              Bootstrap
            </li>
          </ul>
        </div>
        <div class="column2">
          <ul>
            <li id="skillli" class="html">
              Javascript
            </li>
            <li id="skillli" class="css">
              jQuery
            </li>
            <li id="skillli" class="ng">
              Angular
            </li>
            <li id="skillli" class="js">
              JavaScript
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
