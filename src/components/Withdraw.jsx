import React, { useState } from 'react';
import TransactionForm from './TransactionForm';

const Withdraw = ({ user, balance, onTransactionComplete }) => {
  const [amount, setAmount] = useState(0);

  const handleWithdraw = () => {
    const updatedUser = {
      ...user,
      balance: balance - parseFloat(amount),
    };

    const transaction = {
      user: user.username,
      accountNumber: user.accountNumber,
      name: 'Withdraw',
      date: new Date().toLocaleDateString('en-US'),
      amount: parseFloat(amount),
    };

    updateUserAndSaveTransaction(updatedUser, transaction);
  };

  const updateUserAndSaveTransaction = (updatedUser, transaction) => {
    const allUsers = JSON.parse(localStorage.getItem('users'));
    const updatedArray = allUsers.map((obj) =>
      obj.accountNumber === updatedUser.accountNumber ? updatedUser : obj
    );
    localStorage.setItem('users', JSON.stringify(updatedArray));

    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    currentUser.user.balance = updatedUser.balance;
    localStorage.setItem('loggedInUser', JSON.stringify(currentUser));

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    onTransactionComplete();
  };

  return (
    <div id='withdraw'>
      <h3>Withdraw</h3>
      <TransactionForm
        amount={amount}
        onChangeAmount={(e) => setAmount(e.target.value)}
        onSubmit={handleWithdraw}
        buttonText="Withdraw"
      />
      <button onClick={onTransactionComplete}>Cancel</button>
    </div>
  );
};

export default Withdraw;
