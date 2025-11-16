import React from 'react';
import '../styles/Cancel.css';

const Cancel = () => {
    const handleRedirectHome = () => {
        window.location.href = '/'; // Redirect to homepage
    };
    return (
        <div className="cancel-container">
            <div className="cancel-box ">
                <h1 className="">Payment Canceled</h1>
                <p className="">
                    Your transaction was not completed. You can try again or return to the homepage.
                </p>
                <button onClick={handleRedirectHome} className="">
                    Return to Homepage
                </button>
            </div>
        </div>
    );
};

export default Cancel;