import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(auth.verify());
  }, []);

  if (isLoggedIn === null) {
    return null;
  }

  if (!isLoggedIn) {
    // User not authenticated, redirect to login
    navigate('/login');
  }
  return children;
};

export default ProtectedRoute;
