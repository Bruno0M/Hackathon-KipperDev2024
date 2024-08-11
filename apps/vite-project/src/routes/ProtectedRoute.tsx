import React from 'react';
import useAuthCheck from '../hooks/useAuthCheck';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useAuthCheck();

  return <>{children}</>;
};

export default ProtectedRoute;
