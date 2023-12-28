import React, { useEffect, useState } from 'react';

export default function ProgressBar({timer, onTimeout, mode}) {
  const [remainingTime, setRemainingTime] = useState(timer);
  
  useEffect(() => {
    const timeout = setTimeout(onTimeout, timer);

    return () => {
      clearTimeout(timeout);
    }
  }, [timer, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((previous) => previous - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return <>
    <progress id='question-time' value={remainingTime} max={timer} className={mode}/>
  </>
}