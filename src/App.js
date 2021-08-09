import React from 'react';
import Sketch from "./Sketch"
import Paddle from "./paddle"
import Board from './Board'
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      {/* <Sketch /> */}
      <Paddle />
      <Board/>
    </div>
    </>
  );
}

export default App;

