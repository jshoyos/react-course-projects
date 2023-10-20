import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpenseData(expenseData);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleFormOpen = () => {
    setIsFormOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className='new-expense'>
      {isFormOpen ?
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={toggleFormOpen}/> :
      <button onClick={toggleFormOpen}>Add Expense</button>
      }
    </div>
  );
};

export default NewExpense;
