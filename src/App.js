import React from "react";
import "./App.css";
import MainScore from "./components/MainScore.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mainScore">
        <MainScore />
      </div>
      <footer>Level-Up ©2022 Created by Derek Olsen</footer>
    </div>
  );
}

export default App;
