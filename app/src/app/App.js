import './App.css';
import SessionStatus from '../features/session-status';
import Header from '../features/header'
import { AuthProvider } from '../hooks/useAuth';
import Router from "../routes/router";

function App() {
  return (
        <AuthProvider>
          <Header />
          <SessionStatus />
          <Router />
        </AuthProvider>
  );
}

export default App;
