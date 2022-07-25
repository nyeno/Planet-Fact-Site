/* eslint-disable */
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import PlanetBodyTemplate from "./Components/PlanetBodyTemplate";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <PlanetBodyTemplate />
    </div>
  );
}

export default App;
