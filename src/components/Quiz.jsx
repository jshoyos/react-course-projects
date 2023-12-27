import React, { useCallback, useRef, useState } from 'react';

import QUESTIONS from '../questions.js';
import quizComplete from '../assets/quiz-complete.png';
import Question from './Question.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([])
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function (answer) {
    setUserAnswers((previous) => {
      return [...previous, answer];
    });
  }, []);

  const handleTimeout = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete)
    return <div id='summary'>
      <img src={quizComplete} alt='quiz completed' />
      <h2>Quiz Completed!</h2>
    </div>

  return <>
    <div id='quiz'>
      <Question key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleTimeout} />
    </div>
  </>
}