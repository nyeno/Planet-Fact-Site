/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import Button from "./Shared/Buttons";
import { colors } from "./Shared/colors";
import { H1, H2, H3, H4 } from "./Shared/typography";
import Header from "./Components/Header";
import background from "./assets/background-stars.svg"
function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="App" style={{backgroundColor:"#070724",backgroundImage:`url(${background})`, backgroundSize: "cover"}}>
     <Header/>
     <Button> Buton</Button>
    </div>
  );
}

export default App;
