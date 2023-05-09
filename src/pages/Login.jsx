import React, { useState } from 'react';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username, accountNumber });
    console.log('Logged in successfully');
    setLoggedIn(true);
  };

  if (loggedIn) {
    return null;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Account Number:
          <input
            type="text"
            value={accountNumber}
            onChange={(event) => setAccountNumber(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
