import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "../../App.css";
import Card from "../GlobalComponents/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
// import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  //   const expenses = [
  //     {
  //       amount: 123,
  //       date: new Date("December 25, 2021 23:15:30"),
  //       title: "title one",
  //     },
  //     {
  //       amount: 345,
  //       date: new Date("December 25, 2020 23:15:30"),
  //       title: "title two",
  //     },
  //     {
  //       amount: 567,
  //       date: new Date("December 25, 2019 23:15:30"),
  //       title: "title three",
  //     },
  //     {
  //       amount: 789,
  //       date: new Date("May 25, 2022 23:15:30"),
  //       title: "title four",
  //     },
  //   ];

  const filterChangeHandler = (selectedYear) => {
    console.log("1");
    setFilteredYear(selectedYear);
  };
  return (
    <Card>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      {props.items &&
        props.items.map((expense, i) => (
          <ExpenseItem
            key={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
    </Card>
  );
}

export default Expenses;
