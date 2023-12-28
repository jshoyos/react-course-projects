import React from 'react';

import InvestmentLogo from '../assets/investment-calculator-logo.png';
import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <img src={InvestmentLogo} alt='investment logo'/>
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;