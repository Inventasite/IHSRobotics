import React from 'react';
import './App.css';
import Overdrive from './image (1).png';
import Typewriter from "typewriter-effect";

function App() {
  
  return (
    <div className="content">
      <div className = "banner">
        <div className="tabs">
          <nav>
            <a href=".Home">Home&nbsp;&nbsp;&nbsp;</a>
            <a href=".About">About&nbsp;&nbsp;&nbsp;</a>
            <a href=".Contact">Contact&nbsp;&nbsp;&nbsp;&nbsp;</a>
          </ nav>
        </div>

          <img className="logo" alt="logo" src={Overdrive} />
          <div className="title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("OVERDR!VE ROBOTICS")
                  .pauseFor(1000)
                  .start();
              } } />
          </div>
      </div>

      <div className="Home">
        <div className = "Home1">
        </div>
      </div>
      <div className="About"></div>
      <div className="Contact"></div>
    </div>
  );
}

export default App;