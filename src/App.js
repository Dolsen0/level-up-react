import React from 'react';
import './App.css';
import { Categories } from './components/Categories.jsx';
import { Creative } from './components/Creative.jsx';
import { Fun } from './components/Fun.jsx';
import { MainScore } from './components/MainScore.jsx';
import { Mental } from './components/Mental.jsx';
import { Physical } from './components/Physical.jsx';

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
