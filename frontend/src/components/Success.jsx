import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Success.css';

const Success = () => {
  const [status, setStatus] = useState('processing');
  const [message, setMessage] = useState('Processing your payment...');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    const processPaymentSuccess = async () => {
      try {
        // Check if this is a donation or subscription
        const sessionId = searchParams.get('session_id');
        const planTitle = searchParams.get('plan');
        const isAnnual = searchParams.get('annual') === 'true';
        
        // If no plan info, this is likely a donation
        if (!planTitle) {
          setStatus('success');
          setMessage('Thank you for your generous donation! Your contribution helps preserve our heritage.');
          
          // Redirect to dashboard after 3 seconds
          setTimeout(() => {
            navigate('/');
          }, 3000);
          return;
        }

        // This is a subscription payment
        if (!user || !token) {
          setStatus('error');
          setMessage('Missing user information. Please log in again.');
          return;
        }

        console.log('Processing subscription success for plan:', planTitle);

        // Call the test-webhook endpoint to update user role
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:4242'}/test-webhook`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            email: user.email,
            planTitle: planTitle
          })
        });

        if (!response.ok) {
          throw new Error('Failed to update user role');
        }

        const result = await response.json();
        console.log('Role update result:', result);

        setStatus('success');
        setMessage(`Welcome to ${planTitle}! Your subscription has been activated.`);

        // Clear session storage
        sessionStorage.removeItem('selectedPlan');
        sessionStorage.removeItem('isAnnual');

        // Redirect to dashboard after 3 seconds
        setTimeout(() => {
          navigate('/');
        }, 3000);

      } catch (error) {
        console.error('Error processing payment success:', error);
        setStatus('error');
        setMessage('Payment was successful, but there was an issue processing your account. Please contact support.');
      }
    };

    processPaymentSuccess();
  }, [navigate, searchParams, user, token]);

  return (
    <div className="success-container">
      <div className="success-card">
        {status === 'processing' && (
          <>
            <div className="loading-spinner"></div>
            <h2>Processing Your Payment</h2>
            <p>{message}</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="success-icon">✅</div>
            <h2>Payment Successful!</h2>
            <p>{message}</p>
            <p>Redirecting you to the dashboard...</p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="error-icon">❌</div>
            <h2>Payment Processed</h2>
            <p>{message}</p>
            <button onClick={() => navigate('/')} className="cta-button">
              Go to Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Success;
