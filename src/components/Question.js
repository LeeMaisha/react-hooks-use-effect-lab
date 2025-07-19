import React, { useEffect, useState } from "react";

function TimeoutExample() {
  const [message, setMessage] = useState('Waiting...');
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Done!');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <div>{message}</div>;
}
function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(1000);

  // add useEffect code

  function handleAnswer(isCorrect) {
    setTimeRemaining(1000);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
