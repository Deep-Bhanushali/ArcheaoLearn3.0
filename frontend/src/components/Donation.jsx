// src/components/Donation.jsx

import React, { useState, useRef, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/Donation.css'; // Make sure you have this CSS file in the correct path

// --- Stripe Initialization ---
// IMPORTANT: Replace with your actual Stripe Publishable Key from your .env file or config.
const stripePromise = loadStripe('pk_test_51RzhurF3pKbzgrICmVaPE4bVvQVsDk3K7T9UMjLEabW6QE5Iy0NiNYtJZfEshL6YtOt4QOCpHt14yMUEy4Gikdqh004xWo0ew3');

export default function Donation() {
  // --- React State to control the form ---
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('once');
  const [dedication, setDedication] = useState('');
  
  // --- State for the payment process ---
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  
  // --- Ref for the amount input field ---
  const amountInputRef = useRef(null);

  // --- Parallax Effect (This is a good use for useEffect) ---
  useEffect(() => {
    const handleScroll = () => {
      const donation_hero = document.querySelector('.donation-hero');
      if (donation_hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        donation_hero.style.backgroundPosition = `center ${rate}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array ensures this runs only once.

  const handleSelectAmount = (value) => {
    setAmount(value);
    amountInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    amountInputRef.current?.focus();
  };
  
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // --- Stripe Payment Handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    if (parseFloat(amount) < 50) {
        setError('Donation amount must be at least ₹50.');
        setIsProcessing(false);
        return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4242'}/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, dedication, frequency }), 
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error.message || 'An error occurred while preparing the payment.');
      }

      const session = await response.json();
      const stripe = await stripePromise;
      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId: session.id });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err) {
      setError(err.message);
      setIsProcessing(false);
    }
  };

  return (
    <>
      <section className="donation-hero">
        <div className="donation-hero-ornament"></div>
        <div className="donation-hero-content">
          <div className="donation-hero-subtitle"> -• Preserving Heritage •-</div>
          <h1>Guardians of Legacy</h1>
          <p className="donation-hero-description">Your contribution joins a distinguished tradition of preserving humanity's most precious treasures, ensuring our shared heritage endures for generations yet to come.</p>
          <a href="#donate" className="donation-hero-cta" onClick={(e) => handleAnchorClick(e, '#donate')}>
            <span>Begin Your Legacy</span>
          </a>
        </div>
      </section>

      <main className="main-content">
        <section className="section-donation">
          <div className="section-donation-header">
            <div className="section-donation-subtitle">Contribution Tiers</div>
            <h2>Choose Your Role in History</h2>
            <p className="section-donation-description">Each level of support represents a meaningful commitment to preserving our cultural heritage. Select the contribution that resonates with your vision for the future.</p>
          </div>
          
          <div className="donation-tiers" id="donate">
            <div className="tier-card">
              <div className="tier-content">
                <div className="tier-amount">₹50</div>
                <div className="tier-title">Heritage Curator</div>
                <div className="tier-description">Safeguard individual artifacts and documents, ensuring each piece of history receives the meticulous care it deserves.</div>
              </div>
              <button className="tier-button" onClick={() => handleSelectAmount(50)}>Become a Curator</button>
            </div>
            
            <div className="tier-card">
              <div className="tier-content">
                <div className="tier-amount">₹100</div>
                <div className="tier-title">Collection Guardian</div>
                <div className="tier-description">Protect entire collections through advanced conservation techniques and digital preservation.</div>
              </div>
              <button className="tier-button" onClick={() => handleSelectAmount(100)}>Become a Guardian</button>
            </div>
            
            <div className="tier-card">
              <div className="tier-content">
                <div className="tier-amount">₹500</div>
                <div className="tier-title">Legacy Steward</div>
                <div className="tier-description">Champion major exhibitions and research projects that bring history to life for a global audience.</div>
              </div>
              <button className="tier-button" onClick={() => handleSelectAmount(500)}>Become a Steward</button>
            </div>
            
            <div className="tier-card">
              <div className="tier-content">
                <div className="tier-amount">₹1000</div>
                <div className="tier-title">Eternal Patron</div>
                <div className="tier-description">Establish a lasting memorial through comprehensive preservation and educational programs.</div>
              </div>
              <button className="tier-button" onClick={() => handleSelectAmount(1000)}>Become a Patron</button>
            </div>
          </div>
        </section>

        <section className="custom-donation">
          <h3>Craft Your Personal Legacy</h3>
          <p className="custom-donation-subtitle">Every contribution, regardless of size, becomes part of our enduring mission to preserve the treasures of human civilization.</p>
          
          {error && <div className="donation-error">{error}</div>}

          <form className="donation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="amount">Contribution Amount (INR)</label>
              <input 
                ref={amountInputRef}
                type="number" 
                id="amount" 
                name="amount" 
                min="50" 
                placeholder="Enter gift amount (min ₹50)" 
                required 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="frequency">Giving Frequency</label>
              <select 
                id="frequency" 
                name="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              >
                <option value="once">Single Contribution</option>
                <option value="monthly">Monthly Patronage</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="dedication">Memorial Dedication</label>
              <input 
                type="text" 
                id="dedication" 
                name="dedication" 
                placeholder="In honor or memory of..." 
                value={dedication}
                onChange={(e) => setDedication(e.target.value)}
              />
            </div>
            
            <div className="form-submit">
              <button type="submit" className="donation-hero-cta" disabled={isProcessing}>
                <span>{isProcessing ? 'Processing...' : 'Complete Contribution'}</span>
              </button>
            </div>
          </form>
        </section>

        <section className="security-section-donation">
            <div className="section-donataion-header">
                <div className="section-donation-subtitle">Trust & Security</div>
                <h2>Your Confidence, Our Priority</h2>
            </div>
            <div className="security-badges">
                <div className="security-badge">
                    <svg className="security-icon" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.5 5.16-.76 9-4.95 9-10.5V7l-10-5z"/>
                    </svg>
                    <span>Bank-Level Security</span>
                </div>
                <div className="security-badge">
                    <svg className="security-icon" viewBox="0 0 24 24">
                        <path d="M6 10c0-2.21 1.79-4 4-4s4 1.79 4 4v2h2v10H4V12h2v-2zm2 0v2h4v-2c0-1.1-.9-2-2-2s-2 .9-2 2z"/>
                    </svg>
                    <span>256-Bit Encryption</span>
                </div>
                <div className="security-badge">
                    <svg className="security-icon" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Tax Deductible</span>
                </div>
            </div>
        </section>
        
        <section className="impact-section-donation">
            <div className="section-donation-header">
                <div className="section-donation-subtitle" style={{ color: 'var(--gold)' }}>Our Collective Impact</div>
                <h2>A Legacy of Preservation</h2>
                <p className="section-donations-description" style={{ color: 'var(--sand-light)' }}>Through the generosity of patrons like you, we continue our sacred mission of preserving humanity's greatest treasures.</p>
            </div>
            <div className="impact-grid">
                <div className="impact-item">
                    <span className="impact-number">12,847</span>
                    <div className="impact-label">Artifacts Preserved</div>
                </div>
                <div className="impact-item">
                    <span className="impact-number">458</span>
                    <div className="impact-label">Research Projects</div>
                </div>
                <div className="impact-item">
                    <span className="impact-number">2.3M</span>
                    <div className="impact-label">Lives Enriched</div>
                </div>
                <div className="impact-item">
                    <span className="impact-number">89</span>
                    <div className="impact-label">Educational Programs</div>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
