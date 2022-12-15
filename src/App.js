// import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // const [filteredYear, setFilteredYear] = useState("2022");
  const DUMMY_EXPENSES = [
    {
      amount: 123,
      date: new Date("December 25, 2021 23:15:30"),
      title: "title one",
    },
    {
      amount: 345,
      date: new Date("December 25, 2020 23:15:30"),
      title: "title two",
    },
    {
      amount: 567,
      date: new Date("December 25, 2019 23:15:30"),
      title: "title three",
    },
    {
      amount: 789,
      date: new Date("May 25, 2022 23:15:30"),
      title: "title four",
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
