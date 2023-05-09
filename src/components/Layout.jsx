import React, { useState } from 'react';
import Home from "../pages/Home";
import Login from "../pages/Login";

const USER = [
  {
    id: "1",
    username: "John",
    accountNumber: "123456789",
    balance: 100
  },
  {
    id: "2",
    username: "Jane",
    accountNumber: "987653421",
    balance: 200
  },
  {
    id: "3",
    username: "Mary",
    accountNumber: "123123123",
    balance: 350
  }
]

function Layout() {
  const [userData, setUserData] = useState([]);

  const handleUserLogin = (user) => {
    setUserData([...userData, user]);
  }

  const handleUserLogout = () => {
    setUserData([]);
  }

  return (
    <div>
      {userData.length > 0 ?
        <Home user={userData} onLogout={handleUserLogout} /> :
        <Login setUser={handleUserLogin} />
      }
    </div>
  )
}

export default Layout;



