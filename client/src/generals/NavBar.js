import React from 'react';
import './NavBar.css'
import './universals.css'

const NavBar = () => {

  return (
    <div className="navBarContainer">
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
              <a href="https://www.linkedin.com/in/alexandravsavino" target="_blank" rel="noopener noreferrer" className="subButton">
                <img src="/linkedin-logo.png" alt="LinkedIn Logo" className="linkedinLogo"/>
                LinkedIn
              </a>
              <a href="https://github.com/alexsavino" target="_blank" rel="noopener noreferrer" className="subButton">
                <img src="/github-logo.png" alt="GitHub Logo" className="githubLogo"/>
                GitHub
              </a>
              <a href="https://grabcad.com/alexandra.savino-1" target="_blank" rel="noopener noreferrer" className="subButton">
                <img src="/grabcad-logo.png" alt="GrabCAD Logo" className="grabcadLogo"/>
                GrabCAD
              </a>
              <a href="https://www.instagram.com/alex.v.savino/" target="_blank" rel="noopener noreferrer" className="subButton">
                <img src="/instagram-logo.png" alt="Instagram Logo" className="instagramLogo"/>
                Instagram
              </a>
            </div>
          </div>

          <button className="mainButton">PH</button>
        </div>

      </div>

    </div>
  );
};

export default NavBar;