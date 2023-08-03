import React from "react";
import Card from '../UI/Card'

const ExpenseDetails = (props) => {
  const clickHandler = () => {
    console.log('Clicked!!!!!');
  }

  const deleteHandler = () => {
    console.log('Delete-Expense');
  }

  return (
    <Card className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">Rs{props.amount}</div>
      <div>{props.locationOfExpenditure}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
      {/* <h2>Food Rs 10</h2>
        <h2>Petrol Rs 100</h2>
        <h2>Movies Rs 200</h2> */}
    </Card>
  );
}

export default ExpenseDetails;
