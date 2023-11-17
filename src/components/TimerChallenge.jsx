import React, { useRef } from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = () => setRemainingTime(targetTime * 1000);
  const handleStart = () => {
    timer.current = setInterval(() => {
      setRemainingTime((oldValue) => {
        return oldValue - 10;
      });
    }, 10);
  };

  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        ref={dialog}
        remainingTime={remainingTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Timer is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
};

TimerChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  targetTime: PropTypes.number.isRequired
};

export default TimerChallenge;
