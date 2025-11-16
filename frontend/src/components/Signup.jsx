import toast from 'react-hot-toast';
import '../styles/Signup.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    value: 0,
    text: "Password Strength:",
    color: ""
  });
  const [passwordMatch, setPasswordMatch] = useState({
    match: null,
    text: ""
  });

  const handleChange = (e) => {
    const { id, value, checked } = e.target;
    setFormData({
      ...formData,
      [id]: id === "terms" ? checked : value
    });
  };

  // Password strength calculation
  useEffect(() => {
    if (!formData.password) {
      setPasswordStrength({
        value: 0,
        text: "Password Strength:",
        color: ""
      });
      return;
    }

    let strength = 0;
    if (formData.password.length >= 8) strength += 25;
    if (formData.password.match(/[a-z]+/)) strength += 25;
    if (formData.password.match(/[A-Z]+/)) strength += 25;
    if (formData.password.match(/[0-9]+/) || formData.password.match(/[^a-zA-Z0-9]+/)) strength += 25;

    let strengthText = "Password Strength: ";
    let color = "";

    if (strength < 25) {
      color = "#FF4545";
      strengthText += "Weak";
    } else if (strength < 50) {
      color = "#FFA534";
      strengthText += "Fair";
    } else if (strength < 75) {
      color = "#FFD34E";
      strengthText += "Good";
    } else {
      color = "#4CAF50";
      strengthText += "Strong";
    }

    setPasswordStrength({
      value: strength,
      text: strengthText,
      color
    });
  }, [formData.password]);

  // Password match check
  useEffect(() => {
    if (!formData.confirmPassword) {
      setPasswordMatch({ match: null, text: "" });
      return;
    }

    if (formData.password === formData.confirmPassword) {
      setPasswordMatch({ match: true, text: "✓" });
    } else {
      setPasswordMatch({ match: false, text: "✗" });
    }
  }, [formData.password, formData.confirmPassword]);

  const handleMouseMove = (e) => {
    const shapes = document.querySelectorAll(".signup-floating-shapes div");
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach(shape => {
      const offsetX = (x - 0.5) * 20;
      const offsetY = (y - 0.5) * 20;
      shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4242'}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success("Signup successful! Redirecting to login...");
        navigate("/login");
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup");
    }
  };

  return (
    <div className="signup-container" onMouseMove={handleMouseMove}>
      {/* Floating Background Shapes */}
      <div className="signup-floating-shapes">
        <div className="signup-shape1"></div>
        <div className="signup-shape2"></div>
        <div className="signup-shape3"></div>
        <div className="signup-shape4"></div>
      </div>

      <div className="signup-wrapper">
        {/* Logo */}
        <div className="signup-logo-container">
          <div className="signup-logo signup-gold-gradient signup-logo-animation">
            <i className="fas fa-user-plus signup-logo-icon"></i>
          </div>
        </div>
        
        {/* Signup Card */}
        <div className="signup-card">
          <div className="signup-header">
            <h1 className="signup-title">Create Account</h1>
            <p className="signup-subtitle">Join our community today</p>
          </div>
          
          {/* Signup Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="signup-form-group">
              <label htmlFor="name" className="signup-form-label">Full Name</label>
              <div className="signup-input-container">
                <div className="signup-input-icon">
                  <i className="fas fa-user"></i>
                </div>
                <input 
                  type="text" 
                  id="name" 
                  className="signup-custom-input" 
                  placeholder="Your full name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            {/* Email Input */}
            <div className="signup-form-group">
              <label htmlFor="email" className="signup-form-label">Email</label>
              <div className="signup-input-container">
                <div className="signup-input-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <input 
                  type="email" 
                  id="email" 
                  className="signup-custom-input" 
                  placeholder="Your email address" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            {/* Password Input */}
            <div className="signup-form-group">
              <label htmlFor="password" className="signup-form-label">Password</label>
              <div className="signup-input-container">
                <div className="signup-input-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  className="signup-custom-input signup-password-input" 
                  placeholder="Create a password" 
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="signup-password-toggle"
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </div>
              <div className="signup-password-strength">
                <span>{passwordStrength.text}</span>
                <div className="signup-progress-container">
                  <div 
                    className="signup-progress-bar" 
                    style={{ 
                      width: `${passwordStrength.value}%`,
                      backgroundColor: passwordStrength.color
                    }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Confirm Password Input */}
            <div className="signup-form-group">
              <label htmlFor="confirmPassword" className="signup-form-label">Confirm Password</label>
              <div className="signup-input-container">
                <div className="signup-input-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  className="signup-custom-input" 
                  placeholder="Confirm your password" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <div className={`signup-password-match ${passwordMatch.match === true ? "signup-password-match-success" : passwordMatch.match === false ? "signup-password-match-error" : ""}`}>
                  <span>{passwordMatch.text}</span>
                </div>
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="signup-terms-container">
              <input 
                type="checkbox" 
                id="terms" 
                className="signup-terms-checkbox" 
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms" className="signup-terms-label">
                I agree to the <a href="#" className="signup-terms-link">Terms of Service</a> and <a href="#" className="signup-terms-link">Privacy Policy</a>
              </label>
            </div>
            
            {/* Signup Button */}
            <div className="signup-form-group">
              <button type="submit" className="signup-btn signup-shine-effect">
                Create Account
              </button>
            </div>
          </form>
          
          {/* Divider */}
          <div className="signup-divider">
            <div className="signup-divider-line"></div>
            <span className="signup-divider-text">Or sign up with</span>
            <div className="signup-divider-line"></div>
          </div>
          
          {/* Social Signup */}
          <div className="signup-social-container">
            <button type="button" className="signup-social-btn">
              <i className="fab fa-google signup-social-google"></i>
            </button>
            <button type="button" className="signup-social-btn">
              <i className="fab fa-facebook-f signup-social-facebook"></i>
            </button>
            <button type="button" className="signup-social-btn">
              <i className="fab fa-apple signup-social-apple"></i>
            </button>
          </div>
          
          {/* Login Link */}
          <div className="signup-login-container">
            <p className="signup-login-text">Already have an account? <a href="/login" className="signup-login-link">Sign in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
