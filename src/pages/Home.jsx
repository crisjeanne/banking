import React, { useState } from 'react';
import TransactionModal from '../components/TransactionModal';

function Home(props) {
  const { user, onLogout } = props
  const [showModal, setShowModal] = useState(false)

  if (user.length === 0) {
    return <p>No users found</p>;
  }

  const handleTransactionClick = () => {
    console.log(showModal);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
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
        <button onClick={handleTransactionClick}>New Transaction</button>
        {showModal && <TransactionModal onClose={handleCloseModal} showModal={showModal}/>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}


export default Home;
