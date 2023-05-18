import React, { useState, useEffect } from 'react';

const ExpenseItem = ({ user, balance, onBalanceUpdate }) => {
  const [showForm, setShowForm] = useState(false);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  const handleAddExpense = (e) => {
    e.preventDefault();

    const newExpense = {
      description,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString('en-US'),
      username: user.username,
    };

    const updatedExpenses = [...expenses, newExpense];
    const updatedBalance = balance - newExpense.amount;
    setExpenses(updatedExpenses);
    updateBalance(updatedExpenses, updatedBalance);
    setDescription('');
    setAmount('');

    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const handleEditExpense = (index, updatedDescription, updatedAmount) => {
    const updatedExpenses = [...expenses];
    const expense = updatedExpenses[index];

    if (expense) {
      const initialAmount = expense.amount;
      const difference = initialAmount - parseFloat(updatedAmount);

      expense.description = updatedDescription;
      expense.amount = parseFloat(updatedAmount);
      expense.date = new Date().toLocaleDateString('en-US');

      const updatedBalance = balance + difference;
      setExpenses(updatedExpenses);
      updateBalance(updatedExpenses, updatedBalance);

      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    } else {
      alert('Expense item does not exist or has been deleted');
    }
  };

  const handleDeleteExpense = (index) => {
    const deletedExpense = expenses[index];
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    const updatedBalance = balance + deletedExpense.amount;
    setExpenses(updatedExpenses);
    updateBalance(updatedExpenses, updatedBalance);

    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const updateBalance = (updatedExpenses, updatedBalance) => {
    onBalanceUpdate(updatedBalance);
    updateUserBalance(updatedBalance);
  };

  const updateUserBalance = (updatedBalance) => {
    const allUsers = JSON.parse(localStorage.getItem('users'));
    const updatedUsers = allUsers.map((u) => {
      if (u.accountNumber === user.accountNumber) {
        return { ...u, balance: updatedBalance };
      }
      return u;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    currentUser.user.balance = updatedBalance;
    localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
  };

  return (
    <div id="expenseTracker">
      <h2>Expense Tracker</h2>
      {showForm ? (
        <form
          onSubmit={
            selectedExpense !== null || selectedExpense
              ? () => handleEditExpense(selectedExpense, description, amount)
              : handleAddExpense
          }
        >
          <label>
            Description:
            <br />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Amount:
            <br />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">
            {selectedExpense !== null ? 'Save Expense' : 'Add Expense'}
          </button>
          <br />
          <button
            onClick={() => {
              setShowForm(false);
              setSelectedExpense(null);
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Add Expense</button>
      )}

      {expenses.length > 0 && (
        <div id="expenseList">
          <h3>Expense List</h3>
          <ul id="expenseItems">
            {expenses.map((expense, index) => (
              <li key={index}>
                <span>
                  <p>Date: {expense.date}</p>
                  <p>Description: {expense.description}</p>
                  <p>Amount: ${expense.amount}</p>
                </span>
                <button
                  onClick={() => {
                    setSelectedExpense(index);
                    setDescription(expense.description);
                    setAmount(expense.amount);
                    setShowForm(true);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteExpense(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExpenseItem;
