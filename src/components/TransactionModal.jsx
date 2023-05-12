import React, { useState } from 'react';

const TransactionModal = (props) => {
const {onClose, showModal} = props
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);

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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="transaction-modal">
          <div className="column" onClick={handleDepositClick}>
            <h2>Deposit</h2>
            {showDepositForm && <DepositForm />}
          </div>
          <div className="column" onClick={handleWithdrawClick}>
            <h2>Withdraw</h2>
            {showWithdrawForm && <WithdrawForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

const DepositForm = () => {
  return (
    <form>
      <label htmlFor="amount">Amount:</label>
      <input type="text" name="amount" id="amount" />
      <button type="submit">Submit</button>
    </form>
  );
};

const WithdrawForm = () => {
  return (
    <form>
      <label htmlFor="amount">Amount:</label>
      <input type="text" name="amount" id="amount" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionModal;
