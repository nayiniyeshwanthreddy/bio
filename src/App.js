import React from 'react';
import './css/App.css';
import About from './About.js';
import Skills from './Skills.js';
import Experience from './Experience.js';
import Footer from './Footer.js'; // Import the Footer component

function App() {
  return (
    <div className="app-container">
      <About/>
      <Skills/>
      <Experience/>
      <Footer/> {/* Include the Footer component */}
    </div>
  );
}

export default App;
