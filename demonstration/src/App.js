import React from "react";
import './App.css';

import NidHamster from "./components/NidHamster";
import CatsPage from "./components/CatsPage";
import Agenda from "./components/Agenda";

function App() {
  return (
    <div className="App">
      <Agenda/>
      <CatsPage/>
      <NidHamster/>
    </div>
  );
}

export default App;
