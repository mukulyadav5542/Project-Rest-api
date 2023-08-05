import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

//   let singleElementContent=""
//   if (props.items.length === 1) {
//      singleElementContent = <p className="expenses-list__fallback">Only single Expense here. Please add more...</p>
//   }
  

  return <ul className="expenses-list">
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        locationOfExpenditure={expense.locationOfExpenditure}
      />
      ))}
      {props.items.length === 1 ? <p className="expenses-list__fallback">Only single Expense here. Please add more...</p> : ""}
      {/* {singleElementContent} */}
      {/* {props.items.length === 1 && <p className="expenses-list__fallback">Only single Expense here. Please add more...</p> } */}
  </ul>
};

export default ExpensesList;
