import './App.css';
import {useState, useEffect} from 'react'
import React from 'react';

const Box = ({title, bp}) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const element = document.querySelector('.fade-in');
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
  
          // Check if the element is in the viewport
          if (elementTop < windowHeight) {
            setIsVisible(true);
          }
        }
      };
  
      // Add the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        // Remove the scroll event listener when the component unmounts
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // return (
    //   <div className={`fade-in-text ${isVisible ? 'faded-in' : ''}`}>
    //     This text will fade in on scroll.
    //   </div>
    // );
    
    return <>
    <div className={`fade-in ${isVisible ? 'appear' : ''}`}>
    <h1>{title}</h1>
     <div className="box4">
     <p>{bp}</p>
     </div>
  
    </div>
    </>
}

export default Box
