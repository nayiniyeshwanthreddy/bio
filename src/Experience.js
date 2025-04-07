import React from 'react';
import experienceData from './json/experienceData.json'; // Ensure you have a JSON file with the required data
import './css/Experience.css'; // Import the CSS file for styling

const Experience = () => {
    return (
        <div className='experience-container'>
            <h2>Experience</h2>
            {experienceData.map((experience) => (
                <div key={experience.id} className="experience-item">
                    <h3>{experience.company}</h3>
                    <p><strong>Role:</strong> {experience.role}</p>
                    <p><strong>Start Date:</strong> {experience.startDate}</p>
                    <p><strong>End Date:</strong> {experience.endDate}</p>
                    <ul>
                        {experience.responsibilities.map((responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;
