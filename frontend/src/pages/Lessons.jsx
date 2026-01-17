import React from "react";
import { useSearchParams } from "react-router-dom";
import { generateLesson } from "../services/api";

const MOGULS = [
  "Warren Buffett",
  "Charlie Munger",
  "Benjamin Graham",
  "Morgan Housel",
  "Robert Kiyosaki",
];

const DIFFICULTY = ["Beginner", "Intermediate", "Advanced"];

export default function Lessons() {
  const [params, setParams] = useSearchParams();
  const step = params.get("step") || "mogul";
  const mogul = params.get("mogul");
  const difficulty = params.get("difficulty");

  const [lesson, setLesson] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const startLesson = async (selectedDifficulty) => {
    setLoading(true);
    setParams({
      step: "lesson",
      mogul,
      difficulty: selectedDifficulty,
    });

    const result = await generateLesson({
      mogul,
      difficulty: selectedDifficulty,
    });

    setLesson(result);
    setLoading(false);
  };

  return (
    <div>
      <h1>AI Financial Lessons</h1>

      {/* STEP 1: Choose Mogul */}
      {step === "mogul" && (
        <>
          <h3>Choose a finance legend</h3>
          <div className="grid">
            {MOGULS.map((m) => (
              <div
                key={m}
                className="card"
                onClick={() =>
                  setParams({ step: "difficulty", mogul: m })
                }
              >
                <h3>{m}</h3>
                <p className="text-muted">
                  Learn principles inspired by {m}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* STEP 2: Choose Difficulty */}
      {step === "difficulty" && (
        <>
          <h3>Select difficulty</h3>
          <div className="grid">
            {DIFFICULTY.map((level) => (
              <div
                key={level}
                className="card"
                onClick={() => startLesson(level)}
              >
                <h3>{level}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {/* STEP 3: Lesson */}
      {step === "lesson" && (
        <>
          {loading || !lesson ? (
            <p>Generating lesson with AI…</p>
          ) : (
            <div className="lesson-card">
              <h2>{lesson.title}</h2>
              <p className="lesson-author">
                Inspired by {lesson.mogul}
              </p>

              <blockquote>{lesson.quote}</blockquote>
              <p>{lesson.explanation}</p>

              <div className="takeaway">
                <strong>Key Takeaway</strong>
                <p>{lesson.takeaway}</p>
              </div>

              <button
                className="primary"
                onClick={() =>
                  setParams({ step: "mogul" })
                }
              >
                Start Another Lesson →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
