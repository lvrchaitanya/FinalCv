import React, { useState } from "react";
import "./styles.css";
import * as RB from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./about";
import { bounce } from "rc-animate";

var col = (
  <div className="col">
    <p>&#128075;</p>
  </div>
);

export default function Middle() {
  const [isAbout, setCount] = useState(false);

  function showAbout() {
    setCount(true);
  }

  return (
    <div className="Middle">
      <div className="bio">
        <h1>
          {col} I'm A Second year Computer science undergraduate at RV College.
          I'm a passionate programmer and a developer. Very dedicated and
          energetic problem solver. My goal is to empower people to achieve more
          with the help of sustainable technologies and products and create a
          better technical ecosystem Chaitanya ,
        </h1>

        <RB.Button
          variant="outline-primary"
          style={{ border: "0px", marginBottom: "5vw" }}
        >
          <i class="fas fa-angle-double-down fa-3x animated bounce" />
        </RB.Button>
      </div>
    </div>
  );
}
