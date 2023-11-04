import React from 'react';

import Player from './components/Player';

function App() {
  return (
    <main>
      <div id='game-container'>
        {/* PLAYERS SECTION */}
        <ol id='players'>
          <Player symbol='X' intialName='Player 1'/>
          <Player symbol='O' intialName='Player 2'/>
        </ol>
        {/* BOARD SECTION */}
      </div>
      {/* LOGS SECTION */}
    </main>
  );
}

export default App;
