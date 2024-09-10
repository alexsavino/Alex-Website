import React from 'react';
import './titlePage.css';

// import DottedGraphBackground from './DottedGraph';
import titlePageSchematic from '../images/title-page-schematic.png';
import maltaBoard from '../images/malta-board.png'


const titlePage = () => {

  return (

    <div className="rightSideContainer">
      <div className="textContainer">

        <div className="SWEIntroContainer">
          <p className="SWELine small">Hello, I'm <span className="myName">Alexandra Savino</span>.</p>
          <p className="SWELine large">I'm a SOFTWARE ENGINEER _</p>
        </div> 

        <div className="astroIntroContainer">
          <p className="astroLine large">Astrophysics Graduate</p>
          <p className="astroLine small">from</p>
          <p className="astroLine large">Columbia University</p>
        </div>

      </div>
    

      <div className="buttonContainer">
        <button className="titleButtons downloadCVButton">Download CV</button>
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


      // {/* <div className="redContainer">
      //   <div className="circuitRedRectangle"></div>
      //   <img
      //     src={titlePageSchematic}
      //     alt="Arbitrary Circuit Schematic"
      //     className="circuitSchematicPNG"
      //   />
      // </div> */}
  );
}


export default titlePage;