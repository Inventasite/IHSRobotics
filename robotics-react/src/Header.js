import './App.css';
import {useState, useEffect} from 'react'
import React from 'react';

const Header = ({title, bp}) => {
   const [fixed, setfixed] = useState(false)
    function handleScroll() {
        setfixed(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return <>
    <div className={`tabs ${fixed ? 'stick' : ''} `}>
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
        </div>
    </>
}

export default Header
