import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {!showForm && (
        <button onClick={() => setShowForm((prevVal) => true)}>
          Add new expense
        </button>
      )}
      {/* {showForm && ( */}
      <ExpenseForm
        addNewExpense={
          props.onAddExpense
          // () =>
          //   props.onAddExpense({
          //     title: "test",
          //     startDate: new Date(),
          //     amount: 4,
          //   })
        }
      />
      {/* )} */}
    </div>
  );
}

export default NewExpense;
