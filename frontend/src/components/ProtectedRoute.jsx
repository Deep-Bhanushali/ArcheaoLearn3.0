import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const ProtectedRoute = ({
  children,
  allowedRoles = [],
  redirectTo = '/login'
}) => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show access denied toast when user doesn't have permission
  useEffect(() => {
    if (!loading && isAuthenticated && user && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      toast.error(`Access denied! Your current role (${user.role}) doesn't have permission to access this page.`, {
        duration: 5000,
      });
    }
  }, [loading, isAuthenticated, user, allowedRoles]);

  // Show small loading indicator while checking authentication (don't block the entire page)
  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
      </div>
    );
  }

  // If not authenticated, store intended URL and redirect to login
  if (!isAuthenticated) {
    // Store the current pathname to redirect after login (but not '/' or '/login')
    if (location.pathname !== '/' && location.pathname !== '/login') {
      sessionStorage.setItem('intendedUrl', location.pathname);
    }
    return <Navigate to={redirectTo} replace />;
  }

  // If no specific roles are required, allow access
  if (allowedRoles.length === 0) {
    return children;
  }

  // Check if user has required role
  if (user && allowedRoles.includes(user.role)) {
    return children;
  }

  // Default: redirect to home page
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
