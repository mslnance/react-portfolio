import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'wanderpro',
      description: 'MERN Stack',
      link: "https://wanderpro.herokuapp.com/",
      repo: "https://github.com/mslnance/wanderpro"
      
    },
    {
      name: 'actively-distanced',
      description: 'Actively Distanced-NodeJS/Semantic UI/Multer/Cloudinary/MySQL/Sequelize ORM',
      link: "https://actively-distanced.herokuapp.com",
      repo: "https://github.com/mslnance/actively-distanced"
    },
    {
      name: 'run-buddy',
      description: 'Run Buddy-HTML/CSS',
      link: "https://mslnance.github.io/run-buddy/",
      repo: "https://github.com/mslnance/run-buddy"
    },
    {
      name: 'taskmaster-pro',
      description: 'Taskmaster Pro-HTML/CSS/JS',
      link: "https://mslnance.github.io/taskmaster-pro/",
      repo: "https://github.comhttps://github.com/mslnance/taskmaster-pro"
    },
    {
      name: 'covid-ca',
      description: 'COVID California-HTML/CSS/JS/JQuery/API',
      link: "https://mslnance.github.io/covid-ca/",
      repo: "https://github.com/mslnance/covid-ca"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
