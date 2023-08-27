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
=======
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
>>>>>>> 529d9798270345cb44980712522b83a09195e81b
        </div>
      </div>
      <div className="About"></div>
      <div className="Contact"></div>
    </div>
  );
}

export default App;