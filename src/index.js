import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  { SearchProvider } from './searchContext';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import HowTo from './Components/HowTo';
import SpecialChars from './Components/SpecialChars'
import LineChart from './Chart/LineChart';
import Navbar from './Components/Navbar/Navbar';
import Crypto from './Components/Cryptos/Crypto';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
   <SearchProvider> 
  <Router>   
  <Navbar /> 
    <Routes>

    <Route exact path="/" element={
          <>
                <Crypto />

          </>
      } />
    
      <Route exact path="/stocks" element={
          <>
                <LineChart />
                <App />
                <HowTo />
                <SpecialChars />
          </>
      } />


    </Routes>
    
  
  </Router>
  </SearchProvider>
  </>  
);
