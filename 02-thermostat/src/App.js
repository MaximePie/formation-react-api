import React from 'react';
import './App.css';
import Consignes from "./components/consignes";
import Thermostat from "./components/Thermostat";

function App() {
  return (
    <div className="App">
      <Consignes/>
      <Thermostat/>
    </div>
  );
}

export default App;
