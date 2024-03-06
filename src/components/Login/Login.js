import React, { useEffect, useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=> {
    auth.logout()
  }, [])

  const login = (e) => {
    e.preventDefault();
    if (auth.login(username, password) === true) {
      navigate('/dashboard');
    } else {
      alert('Forkert brugernavn eller kodeord - prøv igen!');
    }
  };

  return (
    <div className="login-box">
      <h2>Log ind til dashboardet</h2>
      <form onSubmit={login}>
        <div className="user-box">
          <label>Brugernavn</label>
          <input
            type="text"
            name="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="user-box">
          <label>Kodeord</label>
          <input
            type="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="button" variant="primary" type="submit">
          Log ind
        </Button>
      </form>
    </div>
  );
};

export default Login;
