import React, {useState} from 'react'

function TransactionForm(props) {
  const { updateBalance, close } = props
  const [amount, setAmount] = useState(0)

  const handleAmount = (event) => {
    setAmount(event.target.value)
  }




  const handleSubmit = (event) => {
    event.preventDefault()
    updateBalance(amount)
    close()
  }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">Amount:</label>
          <input type="number" min={0} name="amount" id="amount" value={amount} onChange={handleAmount} required/>
          <button type="submit">Submit</button>
        </form>
      );
}

export default TransactionForm