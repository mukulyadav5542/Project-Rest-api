import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      {/* <h2>Expense item!</h2> */}
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} locationOfExpenditure={props.locationOfExpenditure} title={props.title} />
    </div>
  );
}

export default ExpenseItem;
