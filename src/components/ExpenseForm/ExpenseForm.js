import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import "./ExpenseForm.css";
import Card from "../GlobalComponents/Card";

function ExpenseForm(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  // const [date, setDate] = useState(startDate);

  return (
    <Card>
      <div className="expense-form">
        <div className="form-item-wrapper">
          <label>Select date: </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              console.log(date, typeof date);
              setStartDate(date);
            }}
          />
        </div>
        <div>
          <label htmlFor="ftitle">Title: </label>
          <br />
          <input
            type="text"
            id="fname"
            name="ftitle"
            //value=""
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="famount">Amount: </label>
          <br />
          <input
            type="number"
            id="famount"
            name="famount"
            //value=""
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            props.addNewExpense({
              title: title,
              startDate: startDate,
              amount: amount,
            });
          }}
        >
          Submit
        </button>
      </div>
      <button
        onClick={() => {
          props.addNewExpense({
            title: title,
            startDate: startDate,
            amount: amount,
          });
        }}
      >
        Submit test btn
      </button>
    </Card>
  );
}

export default ExpenseForm;
