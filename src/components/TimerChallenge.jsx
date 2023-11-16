import React, { useRef } from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Timer is running...' : 'Timer inactive'}
      </p>
    </section>
  );
};

TimerChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  targetTime: PropTypes.number.isRequired
};

export default TimerChallenge;
