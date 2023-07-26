import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Independence from './Independence.png';
import Typewriter from "typewriter-effect";
import Home from "./pages/home";
import Contacts from "./pages/contacts";
import About from "./pages/about";

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