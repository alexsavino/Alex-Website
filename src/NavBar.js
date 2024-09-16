import React from 'react';
import './NavBar.css'
import './universals.css'

const NavBar = () => {

  return (
    <div className="container">
      <div className="mainBar">
        <div className="mainButtonContainer">

          <div className="buttonWrapper">
            <button className="mainButton">Navigation</button>
            <div className="dropdown">
              <button className="subButton">Landing Page</button>
              <button className="subButton">About</button>
              <button className="subButton">Experience</button>
              <button className="subButton">Skills</button>
              <button className="subButton">Projects</button>
              <button className="subButton">Creative</button>
              <button className="subButton">Contact Me</button>
            </div>
          </div>

          <div className="buttonWrapper">
            <button className="mainButton">Social</button>  
            <div className="dropdown">
              <button className="subButton">LinkedIn</button>
              <button className="subButton">GitHub</button>
              <button className="subButton">GrabCAD</button>
              <button className="subButton">Instagram</button>
            </div>
          </div>

          <button className="mainButton">PH</button>
        </div>

      </div>

    </div>
  );
};

export default NavBar;