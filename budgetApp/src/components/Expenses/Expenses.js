import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) =>
    item.date.getFullYear().toString() === filteredYear,
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilter={filterHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
