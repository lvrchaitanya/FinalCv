import React, { useState } from "react";

import App from "./App";
import Middle from "./middle";
import About from "./about";
export default function Home() {
  return (
    <div>
      <App />
      <Middle />
      <About />
    </div>
  );
}
