import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 1 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 3 },
    { label: "Apr", value: 4 },
    { label: "May", value: 5 },
    { label: "Jun", value: 7 },
    { label: "Jul", value: 2 },
    { label: "Aug", value: 2 },
    { label: "Sep", value: 2 },
    { label: "Oct", value: 2 },
    { label: "Nov", value: 4 },
    { label: "Dec", value: 9 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
