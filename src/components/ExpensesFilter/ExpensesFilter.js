import Card from "../GlobalComponents/Card";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  return (
    <Card className="expenses-filter">
      <span>Filter by year</span>
      <select
        onChange={(e) => {
          props.onChangeFilter(e.target.value);
        }}
        value={props.selected}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </Card>
  );
}

export default ExpensesFilter;
