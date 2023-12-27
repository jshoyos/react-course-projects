import React, { useRef } from 'react';

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return <>
    <ul id='answers'>
          {shuffledAnswers.current.map((answer) => {
            const isSelected = selectedAnswer === answer;
            let cssClasss = '';
            if (answerState === 'answered' && isSelected) {
              cssClasss += 'selected';
            }

            if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
              cssClasss = answerState;
            }

            return <li className='answer' key={answer}>
              <button 
                disabled={answerState !== ''}
                onClick={() => onSelect(answer)}
                className={cssClasss}>{answer}</button>
            </li>
          })}
        </ul>
  </>
}