import React, { useState } from 'react';

import './UserInput.css';

const UserInput = ({investment, handleInvestmentChange}) => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>INITIAL INVESTMENT</label>
          <input type='number' value={investment.initialInvestment}
            required onChange={(event) => handleInvestmentChange('initialInvestment', event.target.value)} />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type='number' value={investment.annualInvestment}
            required onChange={(event) => handleInvestmentChange('annualInvestment', event.target.value)} />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>EXPECTED RETURN</label>
          <input type='number' required value={investment.expectedReturn}
            onChange={(event) => handleInvestmentChange('expectedReturn', event.target.value)} />
        </p>
        <p>
          <label>DURATION</label>
          <input type='number' min='1' required value={investment.duration}
            onChange={(event) => handleInvestmentChange('duration', event.target.value)} />
        </p>
      </div>
    </section>
  )
};

export default UserInput;
