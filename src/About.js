import React from 'react';
import './css/About.css'; // Import the CSS file for styling
import './css/App.css'; // Import the CSS file for styling

const About = () => {
    return (
        <div className="header" >

        <img src={`${process.env.PUBLIC_URL}/yeshwanth_CSU.png`} alt="Profile" className="profile-pic" />
        <div className="text-container">
          <h1 >Yeshwanth Reddy N</h1>
          <p >Java Developer | Data Engineering | AWS | Microservices</p>
        </div>
      </div>
    );
};

export default About;
