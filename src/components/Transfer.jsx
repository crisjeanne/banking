import React, { useState } from 'react';
import TransactionForm from './TransactionForm';

const Transfer = ({ user, balance, onTransactionComplete }) => {
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState('');
  const [recipientAccountNumber, setRecipientAccountNumber] = useState('');

  const handleTransfer = () => {
    const updatedUser = {
      ...user,
      balance: balance - parseFloat(amount),
    };

    const transactionSender = {
      user: user.username,
      accountNumber: user.accountNumber,
      name: 'Transfer Sent',
      date: new Date().toLocaleDateString('en-US'),
      amount: parseFloat(amount),
    };
    const users = JSON.parse(localStorage.getItem('users'))
    const recipientUser = users.find(
      (u) => u.accountNumber === recipientAccountNumber && u.username === recipient
    );
    console.log(recipientAccountNumber, recipient)
    console.log(recipientUser)

    if (!recipientUser) {
      alert('Recipient not found. Please check the account number or username.');
      return;
    }

    const updatedRecipient = {
      ...recipientUser,
      balance: recipientUser.balance + parseFloat(amount),
    };

    const transactionRecipient = {
      user: recipientUser.username,
      accountNumber: recipientUser.accountNumber,
      name: 'Transfer Received',
      date: new Date().toISOString(),
      amount: parseFloat(amount),
    };

    updateUserAndSaveTransaction(updatedUser, transactionSender, updatedRecipient, transactionRecipient);
  };

  const updateUserAndSaveTransaction = (updatedUser, transactionSender, updatedRecipient, transactionRecipient) => {
    const allUsers = JSON.parse(localStorage.getItem('users'));
    const updatedUsers = allUsers.map((user) => {
      if (user.accountNumber === updatedUser.accountNumber) {
        return updatedUser;
      } else if (user.accountNumber === updatedRecipient.accountNumber) {
        return updatedRecipient;
      }
      return user;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    currentUser.user.balance = updatedUser.balance;
    localStorage.setItem('loggedInUser', JSON.stringify(currentUser));

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transactionSender, transactionRecipient);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    onTransactionComplete();
  };

  return (
    <div id='transfer'>
      <h3>Transfer</h3>
      <label>
        Recipient Username:
        <br />
        <input type="text" 
        value={recipient} 
        onChange={(e) => setRecipient(e.target.value)} 
        required
        />
      </label>
      <br />
      <label>
        Recipient Account Number:
        <br />
        <input
          type="text"
          value={recipientAccountNumber}
          onChange={(e) => setRecipientAccountNumber(e.target.value)}
          required
        />
      </label>
      <TransactionForm
        amount={amount}
        onChangeAmount={(e) => setAmount(e.target.value)}
        onSubmit={handleTransfer}
        buttonText="Transfer"
      />
      <button onClick={onTransactionComplete}>Cancel</button>
    </div>
  );
};

export default Transfer;
