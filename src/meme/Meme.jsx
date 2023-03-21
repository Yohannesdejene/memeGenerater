import { useState } from "react";
import "./Meme.css";

const Meme = () => {
  return (
    <form className="form">
      <div className="inputs">
        <input className="up" placeholder="Upper Text" />

        <input className="down" placeholder="Lower Text" />
      </div>
      <div className="meme">
        <button className="click" onClick={console.log("hello wolrd")}>
          Get new meme image
        </button>
        <img className="image" src="./images/1.jpeg" alt="image" />
       
        <p className="U">this is the upper txt</p>
        <p className="L">lower text this the letter which that is   </p>
       
      </div>
    </form>
  );
};
export default Meme;
