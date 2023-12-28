import React, {useState} from 'react';

import './index.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results.jsx';

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setInvestment((previousInput) => {
      const newInput = {
        ...previousInput,
        [inputIdentifier]: +newValue
      };
      return newInput;
    });
  };

  const isInputValid = investment.duration >= 1;

  return (
    <>
      <Header/>
      <UserInput handleInvestmentChange={handleChange} investment={investment}/>
      {!isInputValid && <p className='center'>Please enter a valid input data.</p>}
      {isInputValid && <Results userInput={investment}/>}
    </>
  )
}

export default App
