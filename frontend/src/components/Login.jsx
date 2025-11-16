import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { buildApiUrl } from "../utils/api";
import toast from 'react-hot-toast';
import '../styles/Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(buildApiUrl('/login'), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.token) {
        toast.success('Login successful! Welcome back!');
        await login(data.token); // Wait for login to complete (it will fetch user data)

        // Check if there's an intended URL stored from a previous redirect
        const intendedUrl = sessionStorage.getItem('intendedUrl');
        if (intendedUrl) {
          sessionStorage.removeItem('intendedUrl'); // Clear it after use
          navigate(intendedUrl);
        } else {
          navigate('/');
        }
      } else {
        toast.error(data.message || 'Login failed');
      }

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleMouseMove = (e) => {
    const shapes = document.querySelectorAll(".login-floating-shapes div");
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach(shape => {
      const offsetX = (x - 0.5) * 20;
      const offsetY = (y - 0.5) * 20;
      shape.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  };

  return (
    <div className="login-container" onMouseMove={handleMouseMove}>
      {/* Floating Background Shapes */}
      <div className="login-floating-shapes">
        <div className="login-shape1"></div>
        <div className="login-shape2"></div>
        <div className="login-shape3"></div>
        <div className="login-shape4"></div>
      </div>

      <div className="login-wrapper">
        {/* Logo */}
        <div className="login-logo-container">
          <div className="login-logo login-gold-gradient login-logo-animation">
            <i className="fas fa-user-shield login-logo-icon"></i>
          </div>
        </div>
        
        {/* Login Card */}
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to continue your journey</p>
          </div>
          
          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="login-form-group">
              <label htmlFor="email" className="login-form-label">Email</label>
              <div className="login-input-container">
                <div className="login-input-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <input 
                  type="email" 
                  id="email" 
                  className="login-custom-input" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            {/* Password Input */}
            <div className="login-form-group">
              <div className="login-password-label-container">
                <label htmlFor="password" className="login-form-label">Password</label>
                <a href="#" className="login-forgot-password">Forgot Password?</a>
              </div>
              <div className="login-input-container">
                <div className="login-input-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  className="login-custom-input login-password-input" 
                  placeholder="Your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="login-password-toggle"
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </div>
            </div>
            
            {/* Remember Me */}
            <div className="login-remember-container">
              <input 
                type="checkbox" 
                id="remember" 
                className="login-remember-checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember" className="login-remember-label">Remember me for 30 days</label>
            </div>
            
            {/* Login Button */}
            <div className="login-form-group">
              <button type="submit" className="login-btn login-shine-effect">
                Login
              </button>
            </div>
          </form>
          
          {/* Divider */}
          <div className="login-divider">
            <div className="login-divider-line"></div>
            <span className="login-divider-text">Or continue with</span>
            <div className="login-divider-line"></div>
          </div>
          
          {/* Social Login */}
          <div className="login-social-container">
            <button type="button" className="login-social-btn">
              <i className="fab fa-google login-social-google"></i>
            </button>
            <button type="button" className="login-social-btn">
              <i className="fab fa-facebook-f login-social-facebook"></i>
            </button>
            <button type="button" className="login-social-btn">
              <i className="fab fa-apple login-social-apple"></i>
            </button>
          </div>
          
          {/* Sign Up Link */}
          <div className="login-signup-container">
            <p className="login-signup-text">Don't have an account? <a href="/signup" className="login-signup-link">Sign up now</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
