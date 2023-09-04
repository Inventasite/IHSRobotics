import React from 'react';
import './App.css';
import Overdrive from './image (1).png';
import Typewriter from 'typewriter-effect';

const App = () => {
  return (
    <div className="content">
      
      <div className="banner">
        <div className="tabs">
          <nav>
            <a href="#Home" className="tabLink">
              Home
            </a>
            <a href="#About" className="tabLink">
              About
            </a>
            <a href="#Contact" className="tabLink">
              Contact
            </a>
          </nav>
        </div>

        <img className="logo" alt="logo" src={Overdrive} />
        <div className="title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('OVERDR!VE ROBOTICS').pauseFor(1000).start();
            }}
          />
        </div>
      </div>

      <h2 className="homeTitle">H O M E</h2>
      <div id="Home" className="Home">
        <br />
        <p>Here are our team members</p>
        <p>Here are our awards</p>
      </div>

      <h2 className="aboutTitle">A B O U T</h2>
      <div id="About" className="About">
        <br />
        <p>Here are our robots</p>
      </div>

      <h2 className="contactTitle">C O N T A C T</h2>
      <div id="Contact" className="Contact">
        <br />
        <p>Here's our interest form</p>
        <p>Contact form here</p>
      </div>
    </div>
  );
};

export default App;
