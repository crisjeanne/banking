import React from 'react';

const TransactionForm = ({ amount, onChangeAmount, onSubmit, buttonText }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Amount:
        <br />
        <input type="number" value={amount} onChange={onChangeAmount} />
      </label>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default TransactionForm;
