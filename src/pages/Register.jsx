import React, { useState, useEffect } from 'react';

const Register = ({ onToggleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const [isEmailTaken, setIsEmailTaken] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isUsernameTaken = users.some((user) => user.username === username);
    const isEmailTaken = users.some((user) => user.email === email);

    if (isUsernameTaken) {
      setIsUsernameTaken(true);
      return;
    }

    if (isEmailTaken) {
      setIsEmailTaken(true);
      return;
    }

    const newUser = {
      id: (Math.max(...users.map((user) => parseInt(user.id)), 0) + 1).toString(),
      username,
      password,
      email,
      accountNumber: (Math.floor(Math.random() * 1000000000) + 1).toString(),
      balance: 0,
    };

    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    setIsRegistered(true);
    
    alert("You have successfully registered an account. Please Log in.")

  };

  useEffect(() => {
    if (isRegistered) {
      onToggleLogin(); 
    }
  }, [isRegistered, onToggleLogin]);


  return (
    <div className='intro'>
      <h1>Banking</h1>
      <div id='register'>
        <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={4}
            />
            {isUsernameTaken && (
              <p style={{ color: "red" }}>Username is already taken. Please choose a different one.</p>
            )}
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {isEmailTaken && (
              <p style={{ color: "red" }}>Email is already taken. Please choose a different one.</p>
            )}
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <br />
            <button type="submit">Register</button>
          </form>
          <p>Already have an account? <button onClick={onToggleLogin}>Login</button> </p>
        
      </div>
    </div>
    
  );
};

export default Register;
