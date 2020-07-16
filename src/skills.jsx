import React from "react";
import "./styles.css";

export default function Skill(props) {
  return (
    <section
      id="skills"
      className="Skills"
      style={{ backgroundColor: "#161616" }}
    >
      <div classNameName="skilltitle">
        <h1 align="center">SKILLS</h1>
      </div>
      <div className="row">
        <div className="column">
          <ul>
            <li id="skillli" className="html">
              C/C++
            </li>
            <li id="skillli" className="css">
              PYTHON
            </li>
            <li id="skillli" className="js">
              Java
            </li>
            <li id="skillli" className="ng">
              Node,Express
            </li>
          </ul>
        </div>
        <div className="column2">
          <ul>
            <li id="skillli" className="html">
              React
            </li>
            <li id="skillli" className="css">
              jQuery
            </li>
            <li id="skillli" className="ng">
              Angular
            </li>
            <li id="skillli" className="js">
              JavaScript
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
