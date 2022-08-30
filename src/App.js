import React from 'react';
import './App.css';
// import AllEntries from './components/AllEntries.jsx';
import { Categories } from './components/Categories.jsx';
import LoginButton from './components/Login.jsx';
import  MainScore  from './components/MainScore.jsx';
import NavBar from './components/NavBar.jsx';


function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      <LoginButton/>
      <div className='mainScore'>
      <MainScore />
      </div>

      <div className='categories'>
        <>
        <Categories/>
        </>
        </div>  
        {/* <AllEntries/> */}
      </>
    </div>
  );
}

export default App;
