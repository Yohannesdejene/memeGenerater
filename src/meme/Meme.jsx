import { useState } from "react";
import "./Meme.css";
import memeData from "../memeData";

const Meme = () => {
  const [state, setState] = useState(memeData.data.memes);
  const [index, setIndex] = useState(0);
  const [upperText,setUpper]=useState("");
  const [lowerText,setLower]=useState("");

  /// console.log(state);
  function handleClick() {
    setIndex((current) => current + 1);
  }
  function handleInputUp(event) {
    setUpper(event.target.value)
  }
  function handleInputDown() {

    setLower(event.target.value)
  }

  return (
    <div className="form">
      <div className="inputs">
        <input
          className="up"
          placeholder="Upper Text"
          onChange={handleInputUp}
          value={upperText}
        />

        <input
          className="down"
          placeholder="Lower Text"
          onChange={handleInputDown}
          value={lowerText}
        />
      </div>
      <div className="meme">
        <button className="click" onClick={handleClick}>
          Get new meme image
        </button>

        <img className="images" src={state[index].url} alt="image" />

        <p className="U" >{upperText}</p>
        <p className="L" >{lowerText} </p>
      </div>
    </div>
  );
};
export default Meme;
