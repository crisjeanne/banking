import React, { useState } from 'react';

function Login(props) {
  const { setUser, userArray, onShowRegister } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundUser = userArray.find(
      (user) =>
        user.username === username && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert("Invalid username or password");
    }
  };

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
          Password:
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <br />
        <button type="button" onClick={onShowRegister}>Register</button>
      </form>
    </div>
  );
}

export default Login;
