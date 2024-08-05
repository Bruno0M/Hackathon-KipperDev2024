import { Outlet } from 'react-router-dom';
import useAuthCheck from './hooks/useAuthCheck';

export default function App() {
    useAuthCheck(); 
  return (
    <div>
      <Outlet />
    </div>
  );
};