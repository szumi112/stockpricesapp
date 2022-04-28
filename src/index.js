import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StockSearchBar from './Components/StockSearchBar';

import "bootstrap/dist/css/bootstrap.min.css"
import HowTo from './Components/HowTo';
import SpecialChars from './Components/SpecialChars'
import RefreshPage from './Components/RefreshPage';


ReactDOM.render(
  <React.StrictMode>
    
    <App />
    <StockSearchBar />
    <HowTo />
    <SpecialChars />
    
    
  </React.StrictMode>,
  document.getElementById('root')
);
