import React from 'react';
import './css/Footer.css'; // Import the CSS file for styling


const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Yeshwanth Reddy Nayini. All rights reserved.</p>
        </footer>
    );
};



export default Footer;
