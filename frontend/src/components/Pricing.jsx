import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe
import { AuthContext } from '../context/AuthContext';
import '../styles/Pricing.css';

const stripePromise = loadStripe('pk_test_51RzhurF3pKbzgrICmVaPE4bVvQVsDk3K7T9UMjLEabW6QE5Iy0NiNYtJZfEshL6YtOt4QOCpHt14yMUEy4Gikdqh004xWo0ew3');

const PricingCard = ({ title, price, description, features, isPopular, isAnnual }) => {
  const [isPaying, setIsPaying] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);

  const handleClick = async () => {
    setIsPaying(true);
    setPaymentError(null); // Clear any previous errors

    if (price === 0) {
      console.log("Navigating to free signup for Explorer plan.");
      navigate('/signup'); // Or whatever your free signup path is
      setIsPaying(false);
      return;
    }

    // Debug logging
    console.log("Auth context values:", { user, token, isAuthenticated: user ? true : false });

    // Check if user is authenticated
    if (!user || !token) {
      console.log("Authentication failed:", { user: !!user, token: !!token });
      setPaymentError('Please log in to subscribe to a plan.');
      setIsPaying(false);
      navigate('/login');
      return;
    }

    try {
      // Store plan information for success page
      sessionStorage.setItem('selectedPlan', title);
      sessionStorage.setItem('isAnnual', isAnnual.toString());

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4242'}/create-subscription-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ planTitle: title, isAnnual }), // Send the plan's price and title
      });
      console.log(response);
      

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to create checkout session.');
      }

      const session = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error('Stripe.js failed to load.');
      }

      // Redirect to Stripe Checkout
      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId: session.id });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
      // If redirection is successful, the user leaves your site,
      // so the following lines might not be reached unless an error occurs before redirect.
    } catch (err) {
      console.error("Payment error:", err.message);
      setPaymentError(err.message);
      setIsPaying(false); // Stop processing on error
    }
  };

  return (
    <div className={`pricing-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && <div className="popular-badge">Most Popular</div>}
      <div className="pricing-header">
        <h3>{title}</h3>
        <div className="price">
          <span className="currency">₹</span>
          <span className="amount">{price}</span>
          <span className="period">/month</span>
        </div>
        <p className="pricing-description">{description}</p>
      </div>
      <ul className="pricing-features">
        {features.map((feature, index) => (
          <li key={index} className={feature.disabled ? 'disabled' : ''}>
            <i className={`fas ${feature.disabled ? 'fa-times' : 'fa-check'}`}></i> {feature.text}
          </li>
        ))}
      </ul>
      <button
        className="cta-pricing-button"
        onClick={handleClick}
        disabled={isPaying} // Disable button while processing
        style={{ display: 'block', margin: '0 auto', position: 'relative', top: '-20px' }}
      >
        {isPaying ? 'Processing...' : 
         (title === 'Explorer' ? 'Sign Up Free' : 
          (!user || !token) ? 'Login to Subscribe' : 'Get Started')}
      </button>
      {paymentError && <p className="payment-error-message" style={{ color: 'red', textAlign: 'center' }}>{paymentError}</p>}
    </div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { user, token } = useContext(AuthContext);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  const pricingData = [
    {
      title: "Explorer",
      price: 0,
      description: "Perfect for casual history enthusiasts",
      features: [
        { text: "Basic artifact recognition" },
        { text: "Limited quiz access" },
        { text: "Community forum access" },
        { text: "Basic timeline exploration" },
        { text: "Heritage Academy: History on Screen", disabled: true },
        { text: "Learning Through Time - A Video Journey", disabled: true },
        { text: "Echoes of the Past: Video Collection", disabled: true }
      ],
      isPopular: false
    },
    {
      title: "Archaeologist",
      price: 129,
      description: "For dedicated history learners",
      features: [
        { text: "Advanced artifact recognition" },
        { text: "Full quiz library access" },
        { text: "Community forum access" },
        { text: "Complete timeline exploration" },
        { text: "Heritage Academy: History on Screen" },
        { text: "Learning Through Time - A Video Journey" },
        { text: "Echoes of the Past: Video Collection", disabled: true }
      ],
      isPopular: true
    },
    {
      title: "Curator",
      price: 299,
      description: "For serious archaeological enthusiasts",
      features: [
        { text: "Professional artifact recognition" },
        { text: "Full quiz library access" },
        { text: "Priority community support" },
        { text: "Complete timeline exploration" },
        { text: "Heritage Academy: History on Screen" },
        { text: "Learning Through Time - A Video Journey" },
        { text: "Echoes of the Past: Video Collection" }
      ],
      isPopular: false
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-header">
        <h2 className="section-title">Choose Your Plan</h2>
        <p className="section-subtitle">Select the perfect membership for your archaeological journey</p>
      </div>
      <span className="gold-line"></span>

      <div className="pricing-toggle">
        <span className={`toggle-option ${!isAnnual ? 'active' : ''}`}>Monthly</span>
        <label className="switch">
          <input type="checkbox" id="billing-toggle" checked={isAnnual} onChange={toggleBilling} />
          <span className="slider round"></span>
        </label>
        <span className={`toggle-option ${isAnnual ? 'active' : ''}`}>
          Annual <span className="save-badge">Save 20%</span>
        </span>
      </div>

      <div className="pricing-cards">
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={isAnnual ? Math.round(plan.price * 0.8) : plan.price}
            description={plan.description}
            features={plan.features}
            isPopular={plan.isPopular}
            isAnnual={isAnnual}
          />
        ))}
      </div>

      <div className="custom-plans">
        <div className="custom-plan-content">
          <h3><i className="fas fa-university"></i> Educational Institutions</h3>
          <p>Special pricing and features available for schools, universities, and museums. Contact us for custom plans tailored to your educational needs.</p>
        </div>
        <button className="cta-pricing-button">Contact Sales</button>
      </div>
    </section>
  );
};

export default Pricing;
