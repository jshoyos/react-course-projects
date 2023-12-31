import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

import PropType from 'prop-types';

const ResultModal = forwardRef(({ targetTime, remainingTime, onReset }, ref) => {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2> You lost!</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>The target time was {targetTime} seconds</p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

ResultModal.propTypes = {
  targetTime: PropType.number.isRequired,
  remainingTime: PropType.number.isRequired,
  onReset: PropType.func.isRequired
};
ResultModal.displayName = 'ResultModal';

export default ResultModal;
