import React from 'react'

const TransactionHistory = (props) => {
    const { transactions } = props
    return (
        <div id='transactionHistory'>
            <h2>Transaction History</h2>
            <ul id='transactionsList'>
              {transactions.map((transaction, index) => (
                <li key={index}>
                    <p>Date: {transaction.date}</p>
                    <p>Transaction: {transaction.name}</p>
                    <p>Amount: {transaction.amount}</p>
                </li>
              ))}
            </ul>
        </div>
    )
}

export default TransactionHistory