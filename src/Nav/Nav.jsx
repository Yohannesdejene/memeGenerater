import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="Nav">
      <div className="head">
        <img src="./images/memelogo.jpg" alt="logo" />

        <h2>Meme Generator</h2>
      </div>
      <h4>React Course 3</h4>
    </div>
  );
};

export default Nav;
