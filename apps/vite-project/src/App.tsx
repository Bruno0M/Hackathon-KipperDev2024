import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  // useAuthCheck(); 
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
