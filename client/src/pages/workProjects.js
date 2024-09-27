import React, { useEffect } from 'react';
import './WorkProjects.css';

const WorkProjects = () => {

  useEffect(() => {
    const updateHeight = () => {
      const height = document.querySelector('.WORKPROJECTS_primaryRectangle')?.offsetHeight || 0;
      document.documentElement.style.setProperty('--WORKPROJECTS-primary-rectangle-height', `${height}px`);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);
  
  return (
    <div id="workProjects" className="WORKPROJECTS_pageContainer" >
      <div className="WORKPROJECTS_contactMeSign">
        <p className="WORKPROJECTS_title">Recent Projects</p>
        <p className="WORKPROJECTS_subtitle">Academics & Business Personal</p>
      </div>

      <div className="WORKPROJECTS_primaryRectangle"></div>
    </div>
  );
};

export default WorkProjects;