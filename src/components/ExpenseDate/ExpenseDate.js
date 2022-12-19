import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = new Date(props.date).getMonth(); //.toISOString();
  const day = props.date.getDate(); //.toISOString();
  const year = props.date.getFullYear(); //.toISOString();
  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
