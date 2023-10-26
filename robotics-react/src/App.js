import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import emailjs from 'emailjs-com';
import Overdrive_Logo from "./images/Overdrive_Logo.png";
import Typewriter from "typewriter-effect";
import Independence_Logo from "./images/Independence_Logo.png";
import First_Tech_Challenge from "./images/First_Tech_Challenge_Logo.png";
import Mission_Statement from "./images/mission_statement.png";
import Awards_group from "./images/Awards_group.png";
import Awards_large from "./images/Award_large.png";
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaAward } from 'react-icons/fa';
import Award_medium from "./images/Award_medium.png";
import Robot23 from "./images/22-23_Robot.png";
import drivetrain23 from "./images/22-23_drivetrain.png";
import cad23 from "./images/22-23_cad.png";
import claw23 from "./images/22-23_claw.png";
import lift23 from "./images/22-23_lift.png";
import bucketandlift22 from "./images/bucketandlift21-22.png";
import capper22 from "./images/capper21-22.png";
import drivetrain22 from "./images/drivetrain21-22.png";
import intake22 from "./images/robointake21-22.png";
import spinner22 from "./images/spinner21-22.png";
import Header from "./Header";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };
  
    const animateWhenVisible = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observerList = [
      new IntersectionObserver(animateWhenVisible, options),
      new IntersectionObserver(animateWhenVisible, options),
    ];
  
    const elementsToAnimate = [
      document.querySelector('.purp_con'),
      document.querySelector('.purp_con2'),
    ];
  
    elementsToAnimate.forEach((element, index) => {
      if (element) {
        observerList[index].observe(element);
      }
    });
  
    return () => {
      observerList.forEach((observer) => observer.disconnect());
    };
  }, []);
  
  return (
    <div>
    <Header/>
    <div className="content">
      <div className="banner">
        {/* <div className="tabs">
          <nav>
            <a href="#Home" className="tabLink">
              Home
            </a>
            <a href="#About" className="tabLink">
              About
            </a>
            <a href="#Our Robots" className="tablink">
              Our Robots
            </a>
            <a href="#Contact" className="tabLink">
              Contact
            </a>
          </nav>
        </div> */}
        

        <img className="logo" alt="logo" src={Overdrive_Logo} />
        <div className="title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("FTC OVERDR!VE ROBOTICS")
                .pauseFor(1000)
                .start();
            }}
          />
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Team 17294").pauseFor(1000).start();
            }}
          />
        </div>
        <div className="adress">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Independence High School")
                .pauseFor(1000)
                .start();
            }}
          />
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Frisco, TX").pauseFor(1000).start();
            }}
          />
        </div>
      </div>

      
      <div id="Home" className="Home">
        <div className="container2">
          <img
            className="logo"
            src={Independence_Logo}
            alt="Independence Logo"
          />
          <div className="ddescription">
            <h1 className="left">We Are A Veteran Robotics Team:</h1>
            <div clasname="description">
            <p className="team_Description">
              We are a fifth year FTC robotics team part of Independence High
              <br></br>
              School giving students opportunities to participate in STEM
              competitions
            </p>
            <br></br>
            <hr className="line"></hr>
            <div className="banner2">
              <div className="tabs2">
                <nav>
                  <a href="#About" className="tabLink">
                    Read More
                  </a>
                </nav>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
<br></br>
<br></br>
      <div id="About" className="About">
        <h2 className="aboutTitle">ABOUT US</h2>
        <div className="about_section_title">
          <div className="container">
            <img
              className="mission_statement"
              alt="Mission Statement"
              src={Mission_Statement}
            />
<br></br>
            <div className="mission">
              <h1>Mission Statement:</h1>
              <p>
                “Our main goal in Team Over Dr!ve is to promote fairness,
                equality, and gracious professionalism.”
                <br></br>- Captains
              </p>
            </div>
          </div>
        </div>
      </div>
<br></br>
      <div>
        <div className="container">
            <div className="vertcontainer">
                <h1>What We Do:</h1>
                <div className="box1">
                  <p>Every year, First Tech Challenge, hosts a new game with specific rules and a game field that we need to design, program, and build a new robot for.</p> 
                </div>
            </div>
            <img className="First_Tech_Challenge" alt="FTC Logo" src={First_Tech_Challenge} ></img>
        </div>
      <div id="container" className="container">
        <div>
          <h1>Outreach</h1>
          <div className="box1">
            <p>
              People who are a part of our outreach team work on getting
              sponsors and managing finances for our team, as well as organizing
              community event
            </p>
          </div>
        </div>
        <div>
          <h1>CAD</h1>
          <div className="box2">
            <p>
              Our CAD team comes up with solutions to design a robot in Fusion
              360 that will work efficiently to complete the tasks in a small
              amount of time
            </p>
          </div>
        </div>
        <div>
          <h1>Build</h1>
          <div className="box3">
            <p>
              Our build team works with the CAD model and assembles GoBilda and
              REV parts together in order to create the robot, occasionally
              working with machinery
            </p>
          </div>
        </div>
        <div>
          <h1>Programming</h1>
          <div className="box4">
            <p>
              Our programming team collaborate with our build team to code and
              test autonomous portions. We use diffrent tools to create controls for the robots.
            </p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
      
      <div className="container3">
            <div>
                <h1>Awards</h1>
                <p>In our time as an FTC robotics team, our team has earned various rewards as we presented and tested our robot in many competitions around Texas.</p>
            </div>
            <img className="AwardsGroup" alt="Awards_Group" src={Awards_group}></img>
      </div>
    <br></br>
<div className="container">
<div className="VerticalTimeline">
        <VerticalTimeline linecolor="#000">
          <VerticalTimelineElement iconStyle={{background: "#000", color:"#fff"}} icon={<FaAward/>} date="2021-2022">
          <h4> 2019-2020: Winning Alliance at Aledo Qualifiers</h4>
          <img src={Awards_large} alt="Award"></img>
          </VerticalTimelineElement>

          

          <VerticalTimelineElement iconStyle={{background: "#000", color:"#fff"}} icon={<FaAward/>} date="2021-2022">
          <h4> 2020-2021: Second Ranked Team at Aledo Remote Qualifiers</h4>
          <img src={Awards_large} alt="Award"></img>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{background: "#000", color:"#fff"}} icon={<FaAward/>} date="2021-2022">
          <h4> 2021-2022: Control Award at Aledo Bearcat Bot Brawl</h4>
          <img src={Awards_large} alt="Award"></img>
          </VerticalTimelineElement>

        </VerticalTimeline>   
      </div>
      <div className="VerticalTimeline">
        <VerticalTimeline linecolor="#000">

        <VerticalTimelineElement iconStyle={{background: "#000", color:"#fff"}} icon={<FaAward/>} date="2021-2022">
          <h4> 2019-2020: Innovate Award at Aledo Qualifiers Collin Aerospace</h4>
          <img src={Award_medium} alt="Award"></img>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{background: "#000", color:"#fff"}} icon={<FaAward/>} date="2021-2022">
          <h4> 2020-2021: Control award at Aledo Remote Qualifier</h4>
          <img src={Award_medium} alt="Award"></img>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{background: "#000", color:"#fff"}} icon={<FaAward/>} date="2021-2022">
          <h4> 2021-2022: Winning Alliance at Aledo Bearcat Bot Brawl</h4>
          <img src={Awards_large} alt="Award"></img>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{background: "#000", color:"#fff"}} icon={<FaAward/>} date="2021-2022">
          <h4> 2021-2022: Innovate Award at Aledo Bearcat Bot Brawl</h4>
          <img src={Awards_large} alt="Award"></img>
          </VerticalTimelineElement>

        </VerticalTimeline>   
      </div>


</div>

<br></br>

<div id="Our Robots" className="ourRobotsContainer">
      <h2 className="ourrobotstitle">OUR ROBOTS</h2>
      
      <div className="purp_con">
        <p>Our build team works on assembling goBilda parts and motors with the REV hardware parts to create the robot</p>
        <div className="container">
            <div>
            <h3 className="ourRobots">2022-2023</h3>
            <h3 className="ourRobots">Season</h3>
            </div>
            <img src={Robot23} alt="Robot23"></img>
      </div>
      <br></br>
        <div className="container4">
            <div>
                <img src={drivetrain23} alt="drivetrain"></img>
                <p className="buildP">Drivetrain</p>
                <img src={lift23} alt="lift"></img>
                <p className="buildP">Lift</p>
            </div>
            <div>
                <img src={claw23} alt="claw"></img>
                <p className="buildP">Claw</p>
                <img src={cad23} alt="cad"></img>
                <p className="buildP">CAD Model</p>
            </div>
        </div>
      </div>
      
      <div className="purp_con2">
        <p>Our build team works on assembling goBilda parts and motors with the REV hardware parts to create the robot</p>
        <div className="container">
            <div>
            <h3 className="ourRobots">2021-2022</h3>
            <h3 className="ourRobots">Season</h3>
            </div>
            <img src={Robot23} alt="Robot23"></img>
      </div>
        <div className="container4">
            <div>
                <p>Drivetrain</p>
                <img src={drivetrain22} alt="drivetrain"></img>
                <p className="buildP">We created a thin design with clearance to let our robot easily go around or over the barrier, while using miter gears to transfer motor motion to the wheels</p>
                <p>Robot Intake</p>
                <img src={intake22} alt="intake"></img>
                <p className="buildP">Using a gecko wheel, vertical motor, and a surgical string, our intake is able to take in various items into our bucket</p>
                <p>Bucket And Lift</p>
                <img src={bucketandlift22} alt="bucketandlift"></img>
                <p className="buildP">The bucket carries the item while the lift uses viper slides and a motor to quickly ascent the item upwards</p>
            </div>
            <div>
                <p>Carousel Spinner</p>
                <img src={spinner22} alt="carousel spinner"></img>
                <p className="buildP">2 carousel spinners tuned to the best possible speed use servos to turn the carousel</p>
                <p>Capping System</p>
                <img src={capper22} alt="capping system"></img>
                <p className="buildP">A servo which is able to quickly attach to the team shipping element using a magnet and detach it with a twist from the robot</p>
            </div>
        </div>
      
      </div>


</div>
      
<br></br>
<h2 className="contactTitle">CONTACT</h2>
      <div id="Contact" className="Contact">
        <div className="contactForm">
            <br></br>
            <div className="formDetails">
              <input 
                className="input1" 
                placeHolder="Name" 
                value={formData.name}
                onChange={handleChange}
              /><br></br>

              <input 
                className="input1" 
                placeHolder="Grade" 
                value={formData.grade}
                onChange={handleChange}
              /><br></br>

              <input 
                className="input1" 
                placeHolder="Email"
                value={formData.email}
                onChange={handleChange}
              /><br></br>

              <textarea 
                className="input2" 
                placeHolder="What would you like to tell us?"
                value={formData.message}
                onChange={handleChange}
                 /><br></br>
              <input className="submitButt" type="Submit" value="submit" />
            </div>
        </div>
      </div>
    
</div></div>
  );
};

export default App;
