import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFiler from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) =>
    item.date.getFullYear().toString() === filteredYear,
  );

  let expenseContent = <p>No expenses...</p>;

  if (filteredExpenses.length > 0 ) {
    expenseContent = filteredExpenses.map((expense) =>
      <ExpenseItem key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}/>,
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFiler selected={filteredYear} onFilter={filterHandler}/>
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
