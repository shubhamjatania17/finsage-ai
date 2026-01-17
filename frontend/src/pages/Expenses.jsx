import { analyze } from "../services/api";
import { auth } from "../firebase";

export default function Expenses() {
  const run = async () => {
    const token = await auth.currentUser.getIdToken();
    const res = await analyze(
      { expenses: [{ category: "Food", amount: 4000 }] },
      token
    );
    alert(res.expenseInsight);
  };

  return <button onClick={run}>Analyze Expenses</button>;
}
