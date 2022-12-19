import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "../../App.css";
import Card from "../GlobalComponents/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  return (
    <Card>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      {props.items &&
        props.items
        .filter(expense => expense.date.getFullYear() === Number(filteredYear))
        .map((expense, i) => (
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
