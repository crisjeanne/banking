import React, { useState } from 'react';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const USER = [
  {
    id: "1",
    username: "John",
    password: "123123",
    accountNumber: "123456789",
    balance: 100
  },
  {
    id: "2",
    username: "Jane",
    password: "123123",
    accountNumber: "987653421",
    balance: 200
  },
  {
    id: "3",
    username: "Mary",
    password: "123123",
    accountNumber: "123123123",
    balance: 350
  }
]

function Layout() {
  const [userData, setUserData] = useState([]);
  const [showLogin, setShowLogin] = useState(true);

  const handleUserLogin = (user) => {
    const matchedUser = USER.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (matchedUser) {
      setUserData([matchedUser]);
    }
  };

  const handleUserLogout = () => {
    setUserData([]);
    setShowLogin(true);
  };

  const handleShowRegister = () => {
    setShowLogin(false);
  }

  const handleShowLogin = () => {
    setShowLogin(true);
  }

  const handleNewUser = (newUser) => {
    const id = (USER.length + 1).toString();
    const accountNumber = (Math.floor(Math.random() * 900000000) + 100000000).toString();

    const userObj = {
      id,
      accountNumber,
      balance: 0,
      ...newUser
    };
    USER.push(userObj);
    console.log(USER)
    setShowLogin(true);
  }

  return (
    <div>
      {userData.length > 0 ? (
        <Home user={userData} onLogout={handleUserLogout} />
      ) : showLogin ? (
        <Login setUser={handleUserLogin} userArray={USER} onShowRegister={handleShowRegister} />
      ) : (
        <Register onShowLogin={handleShowLogin} onCreateUser={handleNewUser} userArray={USER}/>
      )}
    </div>
  );
}

export default Layout;
