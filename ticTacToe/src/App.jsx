import React, {useState} from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import {WINNING_COMBINATIONS} from './winning-combinations';
import GameOver from './components/GameOver';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let activePlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    activePlayer = 'O';
  }

  return activePlayer;
};

const deriveWinner = (gameBoard, players) => {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquare =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquare =
      gameBoard[combination[2].row][combination[2].column];
    if (firstSquare &&
      firstSquare === secondSquare &&
      secondSquare === thirdSquare) {
      winner = players[firstSquare];
    }
  }
  return winner;
};

const deriveBoard = (gameTurns) => {
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
};

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const isDraw = gameTurns.length == 9;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((previousTurns) => {
      const currentPlayer = deriveActivePlayer(previousTurns);

      const updatedTurns = [{
        square:
          {row: rowIndex, col: colIndex},
        player: currentPlayer,
      }, ...previousTurns];

      return updatedTurns;
    });
  };

  const restartHandle = () => setGameTurns([]);

  const handlePlayerNameChanged = (symbol, newName) => {
    setPlayers((previous) => {
      return {
        ...previous,
        [symbol]: newName,
      };
    });
  };

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player symbol='X' intialName={PLAYERS.X}
            isActive={activePlayer === 'X'}
            onPlayerNameChanged={handlePlayerNameChanged} />
          <Player symbol='O' intialName={PLAYERS.O}
            isActive={activePlayer === 'O'}
            onPlayerNameChanged={handlePlayerNameChanged} />
        </ol>
        {(winner || isDraw) &&
        <GameOver winner={winner} onRestart={restartHandle}/>}
        <GameBoard onSelectSquare={handleSelectSquare}
          board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
