import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  // const test = () => {
  //   console.log(props);
  //   props.onAddExpnese({
  //     title: "title",
  //     startDate: "startDate",
  //     amount: "amount",
  //   });
  // };

  return (
    <div>
      {!showForm && (
        <button onClick={() => setShowForm((prevVal) => true)}>
          Add new expense
        </button>
      )}
      {showForm && <ExpenseForm addNewExpense={props.onAddExpense} />}
      {/* <button onClick={test}></button> */}
    </div>
  );
}

export default NewExpense;
