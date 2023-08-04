//import logo from "./logo.svg";
import "./App.css";

import React from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: "Big Mart",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), locationOfExpenditure: "TV Showroom", },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Car Showroom",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: "Carpenter Shop",
    },
  ];

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(ExpenseItem, { items: expenses })
  // );

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <div>
      {expenses.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          locationOfExpenditure={item.locationOfExpenditure}
        />
      ))}
      </div>
      {/* <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        locationOfExpenditure={expenses[1].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        locationOfExpenditure={expenses[2].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        locationOfExpenditure={expenses[3].locationOfExpenditure}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
