import React from 'react';
import skillsData from './json/skillsData.json'; // Assuming the JSON file is in the same directory
import './css/Skills.css'; // Optional: Add CSS for styling

const Skills = () => {
    return (
        <div className="skills-container">
            {skillsData.map((skill, index) => (
                <div className="skill-card" key={index}>
                    <h3>{skill.name}</h3>
                    <ul>
                        {skill.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;
