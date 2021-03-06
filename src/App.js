import "bootstrap/dist/css/bootstrap.min.css"
import {useEffect, useState} from 'react';
import React from 'react';



function App() {
  
  const [stocks, setStocks] = useState([
    {
      symbol: "",
      price: "",
      percentChange: "",
      _id: "",
    }
  ]);

  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((res) => setStocks(res))
  },[]); 


  const handleDelete = (e) => {
    e.preventDefault();
    const res = e.target.dataset.value;

    if (stocks !== '') {
      setTimeout(() => window.location.reload(), 1000);
      const options = 
      {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json'
        },
        body: JSON.stringify({res}),
      };
  
      const response = fetch(`/api/delete`, options);
      console.log("stock deleted");
      console.log(response);
    };
}

const handleRefresh = (e) => {
  e.preventDefault();
  const res = e.target.dataset.value;

  if (stocks !== '') {
    setTimeout(() => window.location.reload(), 4000);
    const options = 
    {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({res}),
    };

    const response = fetch(`/api/refresh`, options);
    console.log("price refreshed");
    console.log(response);
  };
}


const uniqueStocks = Array.from(stocks.reduce((map, obj) => 
        map.set(obj.symbol, obj), new Map()).values());

        const wordToArr = function(str) {
          return [...str]
        };

  return (
            <div className="App">
            {uniqueStocks.map(stock => {
              const arr = wordToArr(stock.percentChange);
              return(
                (stock.price ? (
                <div className="stock" key={stock._id}>
                
                  <h1>{stock.symbol.toUpperCase()}</h1>
                  
                  <p className="stockPrice">${stock.price}</p>
                  {arr[1] === "+" ? (
                  <p className="greenPercent">{stock.percentChange}</p>
                  ) : (
                    <p className="redPercent">{stock.percentChange}</p>
                  )
                  } 
                  <button className="deleteBtn" data-value={stock._id} onClick={handleDelete}>x</button>
                  <button className="refreshBtn" data-value={stock.symbol} onClick={handleRefresh}></button>
                </div>
                ) : (
                  <div key={stock._id} className="displaynone">
                  </div>
                ))
              )
            })} 
            </div>
  );
}

export default App;
