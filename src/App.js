import React from 'react';
import './App.css';
import { Categories } from './components/Categories.jsx';
import { MainScore } from './components/MainScore.jsx';


function App() {
  return (
    <div className="App">
      <>
      <h1>Level-Up</h1>
      <div className='mainScore'>
      <MainScore />
      </div>

      <div className='categories'>
        <>
        <Categories/>
        </>
        </div>  
      </>
    </div>
  );
}

export default App;
