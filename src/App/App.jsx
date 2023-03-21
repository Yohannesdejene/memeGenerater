import { useState } from "react";

import Nav from "../Nav/Nav";
import Meme from "../meme/Meme";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
   
      <Meme/>

    </div>
  );
}

export default App;
