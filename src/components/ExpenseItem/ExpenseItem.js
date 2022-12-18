import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpensDate";
import Card from "../GlobalComponents/Card";

function ExpenseItem(props) {
  console.log("ExpenseItem updated!");
  return (
    <Card className="expense-item">
      <ExpenseDate date={new Date(props.date)} />
      {/* <div>{new Date(props.date)}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
