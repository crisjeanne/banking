import React, { useState } from 'react'
import TransactionForm from './TransactionForm'

const TransactionModal = (props) => {
  const {user,onClose, showModal} = props
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);


  const handleUpdateBalance = (amount) => {
    user.forEach((u) => {
      console.log(typeof amount)
      console.log(typeof u.balance)
      u.balance = parseFloat(u.balance)
      amount = parseFloat(amount)
      if(showDepositForm){
        u.balance += amount
      } else if (showWithdrawForm){
        u.balance -= amount
      }
    })

  }

  const handleDepositClick = () => {
    setShowDepositForm(true);
    setShowWithdrawForm(false);
  };

  const handleWithdrawClick = () => {
    setShowDepositForm(false);
    setShowWithdrawForm(true);
  };

  if(!showModal) {
    return null
  }

  return (
    <div>
      <div >
        <span onClick={onClose}>
          &times;
        </span>
        <div >
          <h2>{user.map((u) => (
            <div key={u.id} >
              <p>Account Balance: {u.balance}</p>
            </div>
          ))}</h2>
          <div onClick={handleDepositClick}>
            <h2>Deposit</h2>
            {showDepositForm && <TransactionForm user={user} close={onClose} updateBalance={handleUpdateBalance} />}
          </div>
          <div onClick={handleWithdrawClick}>
            <h2>Withdraw</h2>
            {showWithdrawForm && <TransactionForm user={user} close={onClose} updateBalance={handleUpdateBalance} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;