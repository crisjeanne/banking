import React, { useState } from 'react';
import Transaction from '../components/Transaction';
import ExpenseItem from '../components/ExpenseItem';
import TransactionHistory from '../components/TransactionHistory';

const Dashboard = ({ user, onLogout }) => {
  const [balance, setBalance] = useState(user.balance);

  const handleLogout = () => {
    onLogout();
  };

  const handleBalanceUpdate = (newBalance) => {
    setBalance(newBalance);
  };

  const transactions = JSON.parse(localStorage.getItem('transactions'))
  const userTransactions = transactions.filter((u) => u.user === user.username && u.accountNumber === user.accountNumber)


  return (
    <div id='dashboard'>
      <div id='main'>
        <h2>Welcome, {user.username}!</h2>
        <button id='logout' onClick={handleLogout}>Logout</button>
        <div id='card'>
          <p>Account Number: {user.accountNumber}</p>
          <p>Balance: ${balance}</p>
        </div>
        <ExpenseItem user={user} balance={balance} onBalanceUpdate={handleBalanceUpdate} />
      </div>
      <div className='transactions'>
        <Transaction user={user} balance={balance} onBalanceUpdate={handleBalanceUpdate} />
        <TransactionHistory transactions={userTransactions}/>
      </div>
      
    </div>
  );
};

export default Dashboard;