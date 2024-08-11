import useAuthCheck from './hooks/useAuthCheck';
import LogIn from './routes/LogIn';

export default function App() {
    // useAuthCheck(); 
  return (
    <div>
      <LogIn />
    </div>
  );
};