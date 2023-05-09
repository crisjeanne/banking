import React, { useState } from 'react';

function Register(props) {
  const { onShowLogin, onCreateUser } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      username,
      password
    };

    onCreateUser(newUser);
  };

  const handleSwitchToLogin = () => {
    onShowLogin();
  };

  return (
    <div>
      <h2>Register</h2>
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
          Password:
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <button onClick={handleSwitchToLogin}>Login</button>
    </div>
  );
}

export default Register