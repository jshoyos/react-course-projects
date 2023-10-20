import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const titleIdentifier = 'title';
  const amountIdentifier = 'amount';
  const dateIdentifier = 'date';
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState('');

  const inputChangeHandler = (identifier, value) => {
    if (identifier === titleIdentifier) {
      setEnteredTitle(value);
    } else if (identifier === amountIdentifier) {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount(0);
    setEnteredDate('');
    setEnteredTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'
            value={enteredTitle}
            onChange={(event) => inputChangeHandler(titleIdentifier, event.target.value)}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01'
            value={enteredAmount}
            onChange={(event) => inputChangeHandler(amountIdentifier, event.target.valueAsNumber)}/>
        </div>``
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01'
            value={enteredDate}
            onChange={(event) => inputChangeHandler(dateIdentifier, event.target.value)}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={props.closeForm}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
