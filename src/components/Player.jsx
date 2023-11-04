import React, {useState} from 'react';

import PropTypes from 'prop-types';

const Player = ({symbol, intialName}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(intialName);

  const handleEditClick = () => {
    setIsEditing((old) => !old);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <>
      <li>
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
};

export default Player;
