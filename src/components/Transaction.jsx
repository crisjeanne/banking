import React, { useState } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Transfer from './Transfer';


const Transaction = ({ user, balance, onBalanceUpdate }) => {
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);

  const handleDeposit = () => {
    setShowDeposit(true);
    setShowWithdraw(false);
    setShowTransfer(false);
  };

  const handleWithdraw = () => {
    setShowWithdraw(true);
    setShowDeposit(false);
    setShowTransfer(false);
  };

  

  const handleTransfer = () => {
    setShowTransfer(true);
    setShowDeposit(false);
    setShowWithdraw(false);
  };


  const handleTransactionComplete = () => {
    setShowDeposit(false);
    setShowWithdraw(false);
    setShowTransfer(false);
    const updatedUser = JSON.parse(localStorage.getItem('loggedInUser'))
    onBalanceUpdate(updatedUser.user.balance);
  };

  return (
    <div id='transaction'>
      <h2>Transaction</h2>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleTransfer}>Transfer</button>

      {showDeposit && <Deposit user={user} balance={balance} onTransactionComplete={handleTransactionComplete} />}
      {showWithdraw && <Withdraw user={user} balance={balance} onTransactionComplete={handleTransactionComplete} />}
      {showTransfer && <Transfer user={user} balance={balance} onTransactionComplete={handleTransactionComplete} />}
    </div>
  );
};

export default Transaction;
