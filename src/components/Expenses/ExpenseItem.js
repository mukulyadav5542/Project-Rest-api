import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const ExpenseItem = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expense-item">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* <h2>Expense item!</h2> */}
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} locationOfExpenditure={props.locationOfExpenditure} title={props.title} />
    </Card>
  );
}

export default ExpenseItem;
