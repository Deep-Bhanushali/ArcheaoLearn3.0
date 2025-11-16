import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-about">
          <div className="footer-logo">
            <div className="logo-img"></div>
            <h2>ArchaeoLearn</h2>
          </div>
          <p>ArchaeoLearn is dedicated to making archaeological education accessible, engaging, and interactive for students, enthusiasts, and professionals worldwide.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Quizzes</a></li>
            <li><a href="#">AR Experience</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Learning Materials</a></li>
            <li><a href="#">Archaeological News</a></li>
            <li><a href="#">Research Papers</a></li>
            <li><a href="#">Support Center</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> Parul University, Vadodara, Gujarat, India.</p>
          </div>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> info@archaeolearn.com</p>
          </div>
          <div className="contact-info">
            <p><i className="fas fa-phone"></i> +91 789 456 1230 </p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 ArchaeoLearn. All Rights Reserved.</p>
        <div className="footer-links-bottom">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;