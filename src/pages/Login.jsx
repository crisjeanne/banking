import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Register from './Register';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const parsedUser = JSON.parse(loggedInUser);

    if (parsedUser && parsedUser.isLoggedIn) {
      setIsLoggedIn(true);
      setUser(parsedUser.user);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users'));
    const foundUser = users.find((u) => u.username === username && u.password === password);

    if (foundUser) {
      setIsLoggedIn(true);
      setUser(foundUser);
      localStorage.setItem('loggedInUser', JSON.stringify({ isLoggedIn: true, user: foundUser }));
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  const handleToggleRegister = () => {
    setShowRegister(true);
  };

  if (isLoggedIn) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  if (showRegister) {
    return <Register onToggleLogin={() => setShowRegister(false)} />;
  }

  return (
    <div className='intro'>
      <h1>Banking</h1>
      <div id='login'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p> Create new user here: <button onClick={handleToggleRegister}>Register</button> </p>
      
    </div>
    </div>
    
  );
};

export default Login;
