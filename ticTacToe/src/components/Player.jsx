import React, {useState} from 'react';

import PropTypes from 'prop-types';

const Player = ({symbol, intialName, isActive, onPlayerNameChanged}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(intialName);

  const handleEditClick = () => {
    setIsEditing((old) => !old);
    if (isEditing) {
      onPlayerNameChanged(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <>
      <li className={isActive ? 'active' : undefined}>
        <span className='player'>
          {!isEditing && <span className='player-name'>{playerName}</span>}
          {isEditing &&
          <span><input type='text'
            required
            value={playerName}
            onChange={handleChange}/>
          </span>}
          <span>{symbol}</span>
        </span>
        <span>
          <button onClick={handleEditClick}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </span>
      </li>
    </>
  );
};

Player.propTypes = {
  symbol: PropTypes.string.isRequired,
  intialName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onPlayerNameChanged: PropTypes.func.isRequired,
};

export default Player;
