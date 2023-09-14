import './App.css';
import React from 'react';
import Overdrive_Logo from './images/Overdrive_Logo.png';
import Typewriter from 'typewriter-effect';
import Independence_Logo from './images/Independence_Logo.png';
import First_Tech_Challenge from './images/Overdrive_Logo.png';
import Mission_Statement from './images/mission_statement.png'


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

        <img className="logo" alt="logo" src={Overdrive_Logo} />
        <div className="title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('FTC OVERDR!VE ROBOTICS').pauseFor(1000).start();
            }}
          />
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Team 17294').pauseFor(1000).start();
            }}
          />
    </div>
      <div className="adress">
        <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Independence High School').pauseFor(1000).start();
            }}
        />
        <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Frisco, TX').pauseFor(1000).start();
            }}
        />
      </div>
    </div>

    <h2 className="homeTitle">H O M E</h2>
    <div id="Home" className="Home">
         <br />
        <h1>We Are A Veteran Robotics Team</h1>
         <div className="container_left">
         <img className="logo" src={Independence_Logo} alt="Independence Logo" />
         <div clasname="description">
          <p className="team_Description">
            We are a fifth year FTC robotics team part of Independence High 
            <br></br>
            School giving students opportunities to participate in STEM competitions
          </p>
          <br></br>
          <hr></hr>
          <div className="banner">
           <div className="tabs">
            <nav>
             <a href="#About" className="tabLink">
                ReadMore
             </a>
            </nav>
           </div>
          </div>
         </div>
      </div>
    </div>

   <div id="About" className="About">
     <h2 className="aboutTitle">A B O U T</h2>
     <div className="about_section_title">
      <div className="container">
       
        <img className="mission_statement" alt="Mission Statement" src={Mission_Statement} />
        
        <div className="mission">
         <h1>Mission Statement:</h1>
        <p>“Our main goal in Team Over Dr!ve is to promote fairness, equality, and gracious professionalism.”
         <br></br>
         - Captains</p>
        </div>
      </div>
     </div>
    </div>

    <div className="container"></div>

      <div id="container" className="container">
        <div>
          <h1>Outreach</h1>
         <div className="box1">
         <p>People who are a part of our outreach team work on getting sponsors and managing finances for our team, as well as organizing community event</p>
         </div>
        </div>
        <div>
         <h1>CAD</h1>
         <div className="box2">
         <p>Our CAD team comes up with solutions to design a robot in Fusion 360 that will work efficiently to complete the tasks in a small amount of time</p>
         </div>
        </div>
        <div>
        <h1>Build</h1>
         <div className="box3">
         <p>Our build team works with the CAD model and assembles GoBilda and REV parts together in order to create the robot, occasionally working with machinery</p>
         </div>
        </div>
        <div>
        <h1>Programming</h1>
         <div className="box4">
         <p>Our programming team collaborate with our build team to code and test autonomous portions as well as create controls for our robotx                </p>
         </div>
        </div>
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