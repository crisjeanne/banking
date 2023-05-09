import React from 'react';

function Home(props) {
  const { user, onLogout } = props
  if (user.length === 0) {
    return <p>No users found</p>;
  }

  const handleLogout = () => {
    onLogout();
  }

  return (
    <div>
      <div>
        {user.map((u) => (
          <div key={u.id}>
            <p>Name: {u.username}</p>
            <p>Account Number: {u.accountNumber}</p>
            <p>Account Balance: {u.balance}</p>
          </div>
        ))}
      </div>
      <div>
        <button>New Transaction</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}


export default Home;
