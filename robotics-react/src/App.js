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

        <h2 className="homeTitle">H O M E</h2>
        <div className="Home">
          <br></br>
          <p>Here are our team members</p>
          <p>Here are our awards</p>
        </div>

        <h2 className = "aboutTitle">A B O U T</h2>
        <div className="About">
          <br></br>
          <p>Here are our robots</p>

        </div>

        <h2 className = "contactTitle">C O N T A C T</h2>
        <div className="Contact">
          <br></br>
          <p>Here's our interest form</p>
          <p>Contact form here</p>
        </div>
    </div>
  );
}

export default App;