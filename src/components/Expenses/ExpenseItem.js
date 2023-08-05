import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        {/* <h2>Expense item!</h2> */}
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          amount={props.amount}
          locationOfExpenditure={props.locationOfExpenditure}
          title={props.title}
        />
      </Card>
    </li>
  );
};

export default ExpenseItem;
