import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/portfolio">Portfolio</Link><br />
      <Link to="/expenses">Expenses</Link>
    </div>
  );
}
