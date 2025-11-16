// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';  // Add this import

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();  // Add navigation hook
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));  // Check if user is logged in

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   const handleSignupClick = () => {
//     navigate('/signup');
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   return (
//     <header>
//       <nav className="navbar">
//         <div className="logo">
//           <div className="logo-img"></div>
//           <h1>ArchaeoLearn</h1>
//         </div>
//         <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Features</a></li>
//           <li><a href="/quiz">Quizzes</a></li>
//           <li><a href="/gallery">Gallery</a></li>
//           <li><a href="#">AR Experience</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//         <div className="auth-buttons">
//           {isLoggedIn ? (
//             <button onClick={handleLogout}>Logout</button>
//           ) : (
//             <>
//               <button onClick={handleLoginClick}>Login</button>
//               <button onClick={handleSignupClick}>Sign Up</button>
//             </>
//           )}
//         </div>
//         <div className="mobile-menu" onClick={toggleMobileMenu}>
//           <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import context
import { HashLink } from 'react-router-hash-link';
import '../styles/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);  // Use AuthContext
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // const toggleRoleDropdown = () => {
  //   setShowRoleDropdown(!showRoleDropdown);
  // };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    logout();  // Use logout function from context
    navigate('/');
  };

  // const handleRoleChange = async (newRole) => {
  //   const result = await updateUserRole(newRole);
  //   if (result.success) {
  //     alert(`Role updated to ${newRole} successfully!`);
  //   } else {
  //     alert(`Failed to update role: ${result.message}`);
  //   }
  //   setShowRoleDropdown(false);
  // };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
        <div className="logo-img"></div>
          <h1>ArchaeoLearn</h1>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><HashLink smooth to="/#features">
              Features
            </HashLink></li>
          {/* <li><a href="/quiz">Quizzes</a></li> */}
          <li><Link to="https://archieo-chat.onrender.com/">Aion's Bot</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          {/* <li><Link to="/myths">Fiction vs Fact</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/donation">Donate</Link></li>
          {isAuthenticated && (
            <li><Link to="/profile">Profile</Link></li>
          )}
          {/* <li><Link to="#">Contact</Link></li> */}
        </ul>
        <div className="auth-buttons">
          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              
              
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <>
              <button onClick={handleLoginClick}>Login</button>
              <button onClick={handleSignupClick}>Sign Up</button>
            </>
          )}
        </div>
        <div className="mobile-menu" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
