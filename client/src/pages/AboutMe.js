import React from 'react';
import './AboutMe.css';


const AboutMe = () => {
    
  return (
    <div className="pageContainer">
      <div className="aboutMeSign">
        <p className="title">About Me</p>
        <p className="subtitle">What have I been up to?</p>
      </div>
      <div className="primaryRectangle">


        <div className='imageAndTextWrapper'>
          <p className='introParagraph'>
            I'm a <span class="bold">Barnard College graduate with a B.A. in Astrophysics</span>,<br></br>
            with minors in Math-Computer Science, and <span class="bold">I'm currently<br></br>
            pursuing an M.Sc. in Mechanical Engineering & Robotics<br></br>
            at Columbia University via an accelerated 4+1 Program</span>.
          </p> 
          
          <div className="tempImage"></div>
        </div>


        <div className="longerParagraph">
          <p>
            I specialize in Python programming, data visualization, and front-end development, with additional experience in back-end technologies.<br></br>
            My goal is to become a full-stack developer, leveraging my diverse skill set from coursework, professional work, and personal projects.
          </p><p>
            My portfolio includes interactive applications that transform complex scientific concepts into user-friendly simulations. Notable projects<br></br>
            involve modeling particle detectors at CERN, simulating stellar cluster evolution and gravitational lensing, and creating planetary simulations.<br></br>
            I also have experience analyzing large datasets in scientific research contexts, deriving meaningful insights from complex information.
          </p>
        </div>

        <div className="transitionLine">
          <p>
            During my time as an undergraduate, I ... 
          </p>
        </div>


        {/* DESY/CERN */}
        <div className="imageAndTextWrapper">
          <div className="tempImage"></div>
          <p className="desyParagraph">
            ... conducted <span class="bold">detector physics research</span> at particle<br></br>
            physics research centers <span class="bold">DESY in Berlin, Germany</span><br></br>
            and <span class="bold">CERN in Geneva, Switzerland</span>, where I developed<br></br>
            interactive Python simulations for the ATLAS<br></br>
            experiment, collaborated on experimental validation<br></br>
            of these models using advanced hardware, and created<br></br> 
            automation tools to streamline research procedures.
          </p>
        </div>

        {/* AMERICAN MUSEUM OF NATURAL HISTORY */}
        <div className="imageAndTextWrapper">
          <p className="amnhParagraph">
            ... conducted <span class="bold">computational astrophysics research</span> at the<br></br> 
            <span class="bold">American Museum of Natural History</span>, where I developed<br></br> 
            a data pipeline for processing stellar cluster evolution<br></br> 
            simulations, implemented machine learning algorithms for<br></br> 
            cluster analysis, and created an interactive 3D visualization<br></br> 
            model, as well as mentored a junior research intern.
          </p>
          <div className="tempImage"></div>
        </div>


        {/* MICROCHAS/NASA */}
        <div className="imageAndTextWrapper">
          <div className="tempImage"></div>
          <p className="microchasParagraph">
            ... led a team in the <span class="bold">development of MicroCh&alpha;s</span>, a specialized<br></br> 
            spectrograph, at <span class="bold">Columbia University's Department of<br></br>  
            Astronomy</span>.  I iteratively engineered components, led<br></br>
            rigorous testing, and spearheaded successful astronomical<br></br>
            observations. This project won <span class="bold">1st Place</span> at Columbia's Annual<br></br>
            Physics Research Competition as well as <span class="bold">NASA funding<br></br>
            to be launched into permanent orbit aboard it's own nanosatellite</span>.
          </p>
        </div>

        <div className="longerParagraph">
          <p>
            Beyond these notable experiences, my college years were filled with a variety of activities that enriched my perspective and skills.<br></br> 
            These experiences have greatly influenced the interdisciplinary approach I bring to my work.
          </p><p>
            When I'm not coding, I enjoy traveling and drawing, especially architecture. I find that these passions often inspire my design and user<br></br> 
            experience decisions in my technical projects. I’m always open to discussing how these experiences shape my professional outlook,<br></br> 
            so don’t hesitate to reach out!
          </p><p>
            But in sum, I’m focused on merging my scientific knowledge with my passion for intuitive, visually appealing software design.<br></br>
            I’m particularly interested in roles that combine full-stack development, design, data visualization, and creative problem-solving.
          </p>
        </div>

        <div>
          <p>
            {/* onClick={() => window.location.href = '/projects'} */}
            Thank you for reading! Feel free to explore my <span class="bold insideButton">projects</span> and check out my <button className="bold insideButton" onClick={() => window.open('./Alexandra-Savino-Resume.pdf', '_blank')}>resume</button>!
          </p><p>
            You can find me on <a href="https://www.linkedin.com/in/alexandravsavino/" target="_blank" rel="noopener noreferrer"><span class="bold insideButton">LinkedIn</span></a> or reach out via <span class="bold insideButton" onClick={() => window.location.href = '/contact-me'}>email</span> to connect!
          </p>
        </div>

      </div>
    </div>
    )
};

export default AboutMe;