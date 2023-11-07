import React, { useState } from 'react';

import './UserInput.css';

const UserInput = () => {
  const [investement, setInvestment] = useState({
    initialInvestement: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setInvestment((previousInput) => {
      const newInput = {
        ...previousInput,
        [inputIdentifier]: newValue
      };
      return newInput;
    });
  }
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>INITIAL INVESTMENT</label>
          <input type='number' min='0' value={investement.initialInvestement}
            required onChange={(event) => handleChange('initialInvestement', event.target.value)} />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type='number' min='0' value={investement.annualInvestment}
            required onChange={(event) => handleChange('annualInvestment', event.target.value)} />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>EXPECTED RETURN</label>
          <input type='number' min='0' required value={investement.expectedReturn}
            onChange={(event) => handleChange('expectedReturn', event.target.value)} />
        </p>
        <p>
          <label>DURATION</label>
          <input type='number' min='1' required value={investement.duration}
            onChange={(event) => handleChange('duration', event.target.value)} />
        </p>
      </div>
    </section>
  )
};

export default UserInput;
