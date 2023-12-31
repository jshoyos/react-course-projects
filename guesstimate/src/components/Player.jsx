import React, { useState } from 'react';

import { useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [inputPlayerName, setInputPlayerName] = useState();

  const handleClick = () => {
    setInputPlayerName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {inputPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
