import { useState } from "react";

import QUESRIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    console.log(selectedAnswer);
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="questions">
        <h2>{QUESRIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESRIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button
                onClick={() => {
                  handleSelectAnswer(answer);
                }}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
