import React from 'react';
import './App.css';
import Independence from './Independence.png';
import Typewriter from "typewriter-effect";

function App() {
  
  return (
      <div className="banner">
        <img className = "logo" alt = "logo" src={Independence} />
          <div className = "title">
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("| INDEPENDENCE ROBOTICS")
                            .pauseFor(1000)
                            .start();
                    }}
            />
          </div>
      </div>
      
  );
}
export default App;