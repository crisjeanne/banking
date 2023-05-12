import React, { useState } from 'react';

function Register(props) {
  const { onShowLogin, onCreateUser, userArray } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameTaken, setUsernameTaken] = useState(false);

  const isUsernameTaken = (username) => {
    return userArray.some(user => user.username === username)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      username,
      password
    };
    if(isUsernameTaken(username)){
      setUsernameTaken(true)
    }else {
      onCreateUser(newUser);
    }

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
            onChange={(event) => {
              setUsername(event.target.value)
              setUsernameTaken(false)
            }}
            required
            minLength={4}
          />
          {usernameTaken && <p style={{ color: 'red' }}>Username already taken.</p> }
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={8}
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