import React, {useState} from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((currentActivePlayer) => {
      return currentActivePlayer === 'X' ? 'O' : 'X';
    });

    setGameTurns((previousTurns) => {
      let currentPlayer = 'X';

      if (previousTurns.length > 0 && previousTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [{
        square:
          {row: rowIndex, col: colIndex},
        player: currentPlayer,
      }, ...previousTurns];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player symbol='X' intialName='Player 1'
            isActive={activePlayer === 'X'} />
          <Player symbol='O' intialName='Player 2'
            isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare}
          turns={gameTurns} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
