import React, { useState, useEffect, useRef } from 'react';
import './TitlePage.css';

// import DottedGraphBackground from './DottedGraph';
import titlePageSchematic from '../outside-files/title-page-schematic.png';
import maltaBoard from '../outside-files/malta-board.png';

const TitlePage = () => {
  
  /* TO MAKE THE 'I'M A SOFTWARE ENGINEER' ANIMATION */
  const [text] = useState('I\'m a SOFTWARE ENGINEER');
  const [currentIndex, setCurrentIndex] = useState(0);
  const blinkingRef = useRef(null);

  useEffect(() => {

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(intervalId);
        setInterval(() => {
          blinkingRef.current.style.visibility = blinkingRef.current.style.visibility === 'visible' ? 'hidden' : 'visible';
        }, 500);

      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentIndex, text]);


  return (
    <div className="container">

      <div className="redContainer">
        <div className="circuitRedRectangle"></div>
        <img
          src={titlePageSchematic}
          alt="Arbitrary Circuit Schematic"
          className="circuitSchematicPNG"
        />
      </div>

      <div className="rightSideContainer">
        <div className="textContainer">

          <div className="SWEIntroContainer">
            <p className="SWELine small">Hello, I'm <span className="myName">Alexandra Savino</span>.</p>
            <p className="SWELine large">{text.substring(0, currentIndex)} <span ref={blinkingRef}>_</span></p>
          </div> 

          <div className="astroIntroContainer">
            <p className="astroLine large">ex-Astrophysics,</p>
            {/* <p className="astroLine small">from</p> */}
            <p className="astroLine large">Columbia University Graduate</p>
          </div>

        </div>
      

        <div className="buttonContainer">
          <a href="./Alexandra-Savino-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="titleButtons downloadCVButton">Download CV</button>
          </a>
          <button className="titleButtons contactMeButton">Contact Me</button>
        </div> 

        <div className="yellowContainer">
          <div className="pngYellowRectangle"></div>
          <img
            src={maltaBoard}
            alt="Arbitrary Chip"
            className="maltaBoardPNG"
          />
        </div>
      </div>

    </div>
  );
};

export default TitlePage;