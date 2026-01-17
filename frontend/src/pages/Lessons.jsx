import React, { useState } from "react";
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
  const [step, setStep] = useState(1);
  const [mogul, setMogul] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(false);

  const startLesson = async () => {
    setLoading(true);

    const result = await generateLesson({
      mogul,
      difficulty,
    });

    setLesson(result);
    setLoading(false);
    setStep(3);
  };

  return (
    <div>
      <h1>AI Financial Lessons</h1>

      {/* STEP 1: Choose Mogul */}
      {step === 1 && (
        <>
          <h3>Choose a finance legend</h3>
          <div className="grid">
            {MOGULS.map((m) => (
              <div
                key={m}
                className="card"
                onClick={() => {
                  setMogul(m);
                  setStep(2);
                }}
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
      {step === 2 && (
        <>
          <h3>Select difficulty</h3>
          <div className="grid">
            {DIFFICULTY.map((level) => (
              <div
                key={level}
                className="card"
                onClick={() => {
                  setDifficulty(level);
                  startLesson();
                }}
              >
                <h3>{level}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {/* STEP 3: Lesson */}
      {step === 3 && (
        <>
          {loading ? (
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
                onClick={() => {
                  setStep(1);
                  setLesson(null);
                }}
              >
                Next Lesson →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
