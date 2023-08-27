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

<<<<<<< HEAD
      <div className="Home">
        <div className = "Home1">
        </div>
      </div>
      <div className="About"></div>
      <div className="Contact"></div>
=======
        <h2 className="homeTitle">Home</h2>
        <div className="Home">
          <p>Here are our team members</p>
          <p>Here are our awards</p>
        </div>

        <h2 className = "aboutTitle">About</h2>
        <div className="About">
          <p>Here are our robots</p>

        </div>

        <h2 className = "contactTitle">Contact</h2>
        <div className="Contact">
          <p>Here's our interest form</p>
          <p>Contact form here</p>
        </div>
>>>>>>> 540ac6ecf3379066a10af99cd4acf4890289b061
    </div>
  );
}

export default App;