import React from "react";
import "./styles.css";

import * as RB from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Fot(props) {
  return (
    <div class="last">
      <i class="fab fa-twitter fa-3x" />
      <i class="fab fa-facebook-f fa-3x" />
      <i class="fab fa-instagram fa-3x" />
      <p class="copyright">Â© Copyright 2020 CHAITANYA REDDY</p>
      <RB.Button variant="outline-light" size="lg">
        CONTACT
      </RB.Button>
    </div>
  );
}
