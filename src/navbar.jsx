import * as RB from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import "./styles.css";

export default function Nav(props) {
  return (
    <RB.Navbar
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#040404" }}
    >
      <RB.Navbar.Brand href="/" id="logo">
        CR
      </RB.Navbar.Brand>
      <RB.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <RB.Navbar.Collapse id="basic-navbar-nav">
        <RB.Nav className="mr-auto">
          <RB.Nav.Link href="/about" style={{ color: "white" }}>
            <RB.Button variant="outline-light" size="lg">
              About
            </RB.Button>
          </RB.Nav.Link>
          <RB.Nav.Link
            href="https://github.com/lvrchaitanya?tab=repositories"
            className="navbut"
            style={{ color: "white" }}
          >
            <RB.Button variant="outline-light" size="lg">
              GitHub
            </RB.Button>
          </RB.Nav.Link>
          <RB.Nav.Link
            href="#link"
            className="navbut"
            style={{ color: "white" }}
          >
            <RB.Button variant="outline-light" size="lg">
              Resume
            </RB.Button>
          </RB.Nav.Link>
        </RB.Nav>
      </RB.Navbar.Collapse>
    </RB.Navbar>
  );
}
