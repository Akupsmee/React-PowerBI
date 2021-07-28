import React from "react";
import "./App.css";
import IdleTimer from "./helper_utilities.js/idleClock"

function App() {
  
  return (
    <div className="App" style={{ margin: "20px", fontSize: "50px" }}>
      <IdleTimer />
    </div>
  );
}

export default App;
