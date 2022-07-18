/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import Button from "./Shared/Buttons";
import { colors } from "./Shared/colors";
import { H1, H2, H3, H4 } from "./Shared/typography";
import Header from "./Components/Header";
import PlanetBodyTemplate from "./Components/PlanetBodyTemplate";
import { Link } from "react-router-dom";
function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <Header/>
      <div style={{
        display:"flex",
        flexDirection:'column'
      }}>
       <Link to={`/mercury`}>mercury</Link>
       <Link to={`/venus`}>venus</Link>
       <Link to={`/earth`}>earth</Link>
       <Link to={`/mars`}>mars</Link>
       <Link to={`/jupiter`}>jupiter</Link>
       <Link to={`/saturn`}>saturn</Link>
       <Link to={`/uranus`}>uranus</Link>
       <Link to={`/neptune`}>neptune</Link>
      </div>
     
      <PlanetBodyTemplate/>
    </div>
  );
}

export default App;
