import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [chosenYear, setChosenYear] = useState("2021");

  function filterChangeHandler(year) {
    setChosenYear(year);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === +chosenYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={chosenYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
