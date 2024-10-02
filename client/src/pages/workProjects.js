import React, { useEffect, useState } from 'react';
import './WorkProjects.css';

const WorkProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skillCounts, setSkillCounts] = useState({});

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

        const skillFrequency = {};
        data.forEach(project => {
          project.skills.forEach(skill => {
            if (skillFrequency[skill]) {
              skillFrequency[skill]++;
            } else {
              skillFrequency[skill] = 1;
            }
          });
        });

        const sortedSkills = Object.entries(skillFrequency)
          .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        setSkillCounts(sortedSkills);
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

  //  COME BACK HERE!!!!
  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  /* TO FORMAT THE DATE */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const ProjectSkills = ({ project }) => {
    const handleSkillClick = (skill) => {
      console.log(`Clicked on skill: ${skill}`);
    };

    return (
      <div className="WORKPROJECTS_skillsContainer">
        {project.skills.map((skill, index) => (
          <button key={index} className="WORKPROJECTS_skillBox" onClick={() => handleSkillClick(skill)}>
            {skill}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div id="workProjects" className="WORKPROJECTS_pageContainer">
      <div className="WORKPROJECTS_contactMeSign">
        <p className="WORKPROJECTS_title">Recent Projects</p>
        <p className="WORKPROJECTS_subtitle">Academic & Business Personal</p>
      </div>

      <div className="WORKPROJECTS_primaryRectangle">
        <div className="WORKPROJECTS_contentContainer">
          <div className="WORKPROJECTS_leftContentContainer">
            
            <div className="WORKPROJECTS_searchButtonsContainer">
              <button className="WORKPROJECTS_skillBox">Newest To Oldest</button>
              <button className="WORKPROJECTS_skillBox">Oldest To Newest</button>
            </div>

            <div className="WORKPROJECTS_selectedSkills">
              <p>Selected Skills:</p>
            </div>

            <div className="WORKPROJECTS_allProjectsContainer">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="WORKPROJECTS_projectRowContainer"
                  onClick={() => handleProjectClick(project.github_link)}>
                  <p className="WORKPROJECTS_rowLeft">{formatDate(project.date)}</p>
                  <div className="WORKPROJECTS_rowRight">
                    <p className="WORKPROJECTS_projectTitle">{project.title}</p>
                    <ProjectSkills project={project} /> {/* Use the ProjectSkills component */}
                    <p className="WORKPROJECTS_description">{project.description}</p>
                    {project.associated_image && <img src={project.associated_image} alt={project.title} />}
                    <hr className="horizontalLine" />
                  </div>
                </div> 
              ))}
            </div>
          </div>

          {/* DISPLAYING SKILL LIST */}
          <div className="WORKPROJECTS_uniqueSkillsContainer">
            <p className="WORKPROJECTS_projectSearchTitle">Search By Skill</p>
            <ul className="WORKPROJECTS_skillsList">
              {skillCounts.map(([skill, count]) => (
                <li key={skill}>
                  {skill} ({count})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProjects;