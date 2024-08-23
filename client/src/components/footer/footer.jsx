import React from 'react';
import './footer.css'; 
import logo from "./logo-.png"; 

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo}  className="logo=img"alt="Company Logo" />
                </div>
                <div className="footer-content">
                    <p className="footer-text">© 2024 Company Name. All rights reserved.</p>
                    <p className="footer-text">123 Business Rd, Suite 100, City, State, ZIP</p>
                    <p className="footer-text">Phone: (123) 456-7890 | Email: contact@company.com</p>
                    <div className="footer-links">
                        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                        <a href="/terms-of-service" className="footer-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
