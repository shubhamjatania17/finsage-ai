export default function Quiz({ quiz, onPass }) {
  const [score, setScore] = useState(0);

  return (
    <div>
      {quiz.questions.map((q) => (
        <div key={q.q}>
          <p>{q.q}</p>
          {q.options.map((o) => (
            <button onClick={() => o.correct && setScore(score + 1)}>
              {o.text}
            </button>
          ))}
        </div>
      ))}
      {score >= 2 && <button onClick={onPass}>Pass Quiz</button>}
    </div>
  );
}
