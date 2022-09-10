import React from "react";
import "./App.css";
import MainScore from "./components/MainScore.jsx";
import NavBar from "./components/NavBar.jsx";


function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <div className="mainScore">
          <MainScore />
        </div>
        <div className="progressBar">{/* <ProgressMix /> */}</div>

        <div className="categories">
          <>{/* <Categories/> */}</>
        </div>
        {/* <AllEntries/> */}

        {/* <Categories/> */}

        <footer>Level-Up ©2022 Created by Derek Olsen</footer>
      </>
    </div>
  );
}

export default App;
