import React from "react";

function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">Rs{props.amount}</div>
      <div>{props.locationOfExpenditure}</div>
      {/* <h2>Food Rs 10</h2>
        <h2>Petrol Rs 100</h2>
        <h2>Movies Rs 200</h2> */}
    </div>
  );
}

export default ExpenseDetails;
