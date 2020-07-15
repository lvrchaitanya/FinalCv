import React from "react";
import "./styles.css";

export default function Third(props) {
  return (
    <div className="Third" style={{ backgroundColor: props.colour }}>
      <div className="head">
        <h1> {props.head}</h1>
      </div>
      <img src={props.pic} alt="hellow" height={200} />

      <div className="body">
        <h2>{props.body}</h2>
      </div>
    </div>
  );
}
