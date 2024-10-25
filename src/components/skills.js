import React from 'react';
import './skills.css';

function Skills() {
  const skills = [
    { skill: 'HTML5', percentage: 95 },
    { skill: 'CSS3', percentage: 90 },
    { skill: 'JavaScript', percentage: 85 },
    { skill: 'React', percentage: 80 },
    { skill: 'Python', percentage: 75 },
    { skill: 'C++', percentage: 90 },
  ];

  const firstHalfSkills = skills.slice(0, 3);  
  const secondHalfSkills = skills.slice(3);    

  return (
    <>
      <h1>My Skills</h1>
      <div className="skills-container">
        <div className="skills-column">
          {firstHalfSkills.map((skillObj, index) => (
            <div key={index} className="skill-bar-container">
              <div className="skill-name">{skillObj.skill}</div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skillObj.percentage}%` }}
                ></div>
              </div>
              <div className="skill-percentage">{skillObj.percentage}%</div>
            </div>
          ))}
        </div>

        <div className="skills-column">
          {secondHalfSkills.map((skillObj, index) => (
            <div key={index} className="skill-bar-container">
              <div className="skill-name">{skillObj.skill}</div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skillObj.percentage}%` }}
                ></div>
              </div>
              <div className="skill-percentage">{skillObj.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
