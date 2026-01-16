import React, { useState } from "react";

function QuizApp() {
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState({});

  const handleClick = (key, isCorrect) => {
    if (clicked[key]) return;

    setClicked({ ...clicked, [key]: true });
    if (isCorrect) setScore(score + 10);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Thank you for participating in the quiz!</h2>
        <h2>Your Score is {score}</h2>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "aquamarine", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>
        Quiz Application
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>1. What is a closure?</label>

        <div
          onClick={() => handleClick("q1a", false)}
          style={{
            backgroundColor: clicked.q1a ? "red" : "#d4e86c",
            margin: 10,
            padding: 10,
            width: "60%",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          A function inside another function
        </div>

        <div
          onClick={() => handleClick("q1b", true)}
          style={{
            backgroundColor: clicked.q1b ? "green" : "#d4e86c",
            margin: 10,
            padding: 10,
            width: "60%",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          A combination of a function and its lexical scope
        </div>

        <div
          onClick={() => handleClick("q1c", false)}
          style={{
            backgroundColor: clicked.q1c ? "red" : "#d4e86c",
            margin: 10,
            padding: 10,
            width: "60%",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          A group of variables
        </div>

        <div
          onClick={() => handleClick("q1d", false)}
          style={{
            backgroundColor: clicked.q1d ? "red" : "#d4e86c",
            margin: 10,
            padding: 10,
            width: "60%",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          A loop structure
        </div>

        <button
          type="submit"
          style={{
            width: 120,
            margin: 10,
            padding: 8,
            backgroundColor: "orange",
            border: "2px solid black",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuizApp;
