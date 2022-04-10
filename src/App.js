// import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';

function App() {
  const [stocks, setStocks] = useState([
    {
      symbol: "",
      price: "",
      percentChange: "",
    }
  ])

  useEffect(() => {
    fetch("http://localhost:3001/")
    .then((res) => res.json())
    .then((res) => setStocks(res))
  }, []);





      
      //wordToArr(resp);
      //if(arr[1] == "+") {
      //document.querySelector(".percentchangetsla").style.color = "green"
      //} else if (arr[1] == "-") {
       //   document.querySelector(".percentchangetsla").style.color = "red";
      //} else {
        //  document.querySelector(".percentchangetsla").style.color = "black"
      //}}

  return (
    <div className="App">
    {stocks.map(stock => {

      const wordToArr = function(str) {
        return [...str]
      };
      const arr = wordToArr(stock.percentChange);

      return(
        <div className="stock" key={stock.symbol}>
          <h1>{stock.symbol}</h1>
          <p>{stock.price}</p>
          {arr[1] === "+" ? (
          <p className="greenPercent">{stock.percentChange}</p>
          ) : (
            <p className="redPercent">{stock.percentChange}</p>
          )
          }
        </div>
      )
    })}
    <Button variant="light">Allo</Button>
    </div>
  );
}

export default App;
