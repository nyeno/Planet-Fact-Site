import React, { useState } from "react";
import "./App.css";
import Button from "./Shared/Buttons";
import { colors } from "./Shared/colors";
import { H1, H2, H3, H4 } from "./Shared/typography";
import Header from "./Components/Header";
function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;
