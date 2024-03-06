import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const verify = () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return login(username, password);
  };

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUser({ username: username, password: password });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  const value = {
    user,
    login,
    logout,
    verify,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
