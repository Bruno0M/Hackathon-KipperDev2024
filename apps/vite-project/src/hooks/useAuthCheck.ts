import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuthCheck() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('tokenExpiration');

    if (token && expiration) {
      const expTime = parseInt(expiration, 10);
      const currentTime = Math.floor(Date.now() / 1000);

      if (expTime < currentTime) {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
        navigate('/LogIn');
      }
    } else {
      navigate('/LogIn');
    }
  }, [navigate]);
};