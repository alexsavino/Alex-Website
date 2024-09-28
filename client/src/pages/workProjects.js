import React, { useEffect, useState } from 'react';
import './WorkProjects.css';

const WorkProjects = () => {
  const [projects, setProjects] = useState([]); // State to hold projects data
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const updateHeight = () => {
      const height = document.querySelector('.WORKPROJECTS_primaryRectangle')?.offsetHeight || 0;
      document.documentElement.style.setProperty('--WORKPROJECTS-primary-rectangle-height', `${height}px`);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/data');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer'); // Open the GitHub link in a new tab
  };

  /* TO FORMAT THE DATE */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <div id="workProjects" className="WORKPROJECTS_pageContainer">
      <div className="WORKPROJECTS_contactMeSign">
        <p className="WORKPROJECTS_title">Recent Projects</p>
        <p className="WORKPROJECTS_subtitle">Academics & Business Personal</p>
      </div>

      <div className="WORKPROJECTS_primaryRectangle">
        {projects.map((project) => (
          <div
            key={project.id}
            className="WORKPROJECTS_projectRowContainer"
            onClick={() => handleProjectClick(project.github_link)}
          >
            <p className="WORKPROJECTS_rowLeft">{formatDate(project.date)}</p>
            <div className="WORKPROJECTS_rowRight">
              <p className="WORKPROJECTS_projectTitle">{project.title}</p>
              {/* <p>{project.skills.join(', ')}</p> */}

              <div className="WORKPROJECTS_skillsContainer">
                {project.skills.map((skill, index) => (
                  <span key={index} className="WORKPROJECTS_skillBox">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="WORKPROJECTS_description">{project.description}</p>
              {project.associated_image && <img src={project.associated_image} alt={project.title} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProjects;