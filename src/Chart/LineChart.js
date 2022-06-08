import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button'; // from StockSearchBar
import { useContext } from 'react';
import { SearchContext } from '../searchContext';
import debounce from 'lodash.debounce';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Chart from 'chart.js/auto';

import { Line } from 'react-chartjs-2';
import { WhileStatement } from 'requirejs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



function LineChart(props) {
  const [search, setSearch] = useContext(SearchContext);

  var baseUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${search}&apikey=K6Z6JO9JU1FFTLP3`;
  // var polygonApi = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2022-05-11?apiKey=tW6ICt5Hq6UU3u65GibpXc6iwJW9GNsU`;


  const [chart, setChart] = useState();
  // console.log(baseUrl)

  useEffect(() => {
      axios.get(baseUrl)
      .then(res => {
        setChart(res.data);
        // console.log(res.data)
      })
      .catch(error => {
        console.log("there was an error: " + error);
      })
  }, [search]);

   useEffect(()=>{}, [chart]);

      // console.log(chart); // everything -> works
      // console.log(Object.values(chart['Time Series (Daily)']).map(i => i['1. open'])); // PRICE -> works
      // console.log(Object.keys(chart['Time Series (Daily)'])) // DATES -> works


     // console.log("stock prices: " + stockPrices)
     /*
      const stockPrices = useMemo(() => chart && Object.values(chart['Time Series (Daily)']).map(i => i['1. open']).reverse(), [chart]); 
      const stockDates = useMemo(() => chart && Object.keys(chart['Time Series (Daily)']).map(x => x.replace(/\d{4}-/, "")).reverse(), [chart]);
      */
      const stockPrices = useMemo(() => chart && chart['Time Series (Daily)'] && Object.values(chart['Time Series (Daily)']).map(i => i['1. open']).reverse(), [chart]); 
      const stockDates = useMemo(() => chart && chart['Time Series (Daily)'] && Object.keys(chart['Time Series (Daily)']).map(x => x.replace(/\d{4}-/, "")).reverse(), [chart]);
      // console.log("dates: " + stockDates);
      // console.log("prices: " + stockPrices);
  

  var data = {
    labels: stockDates,
    datasets: [{
      label: `${search}`,
      data: stockPrices,
      backgroundColor: "rgba(255,116,89,0.05)",
      borderColor: "rgba(255,105,75,1)",
      borderWidth: 2,
      pointBorderColor: "#2984c5",
      pointBackgroundColor: "#fff",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'black',
      fill: true,
      pointHoverBorderColor: "rgba(41, 132, 197, 1)",
      pointHoverBorderWidth: 7,
      pointRadius: 0,
      pointHitRadius: 30,
      tension: 0.3,
    }]
  };



  var options = {
    plugins: {
    legend: {
      display: '',
      labels: {
        color: 'white',
        font: {
          size: 30,
          family: 'verdana',
        },
      }
    }
  },
    maintainAspectRatio: true,
    responsive: true,
    radius: 3,
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
          color: 'rgba(210,230,244,1)',
          font: {
            size: 12,
            family: "Verdana" // Add your font here to change the font of your legend label
          }
        },
        grid: {
          color: 'rgba(255,255,255,0.02)',
        }
      },
      x: {
        grid: {
          color: 'rgba(255,255,255,0.02)',
        },
        ticks: {
          color: 'rgba(210,230,244,1)',
          font: {
            family: "Verdana" // Add your font here to change the font of your legend label
          }

        }
      },
    },

    
  }

  // from StockSearchBar

  // const [stockSearch, setStockSearch] = useState("AAPL");
  
  function handleButtonEvents() {
		debounceOnChange();
    handleClick();
    setTimeout(() => window.location.reload(), 3000);
	}

  const [userInput, setUserInput] = useState("E.g. AAPL or TSLA or SPY");



  const handleSearch = e => {
    e.preventDefault();
    setUserInput(e.target.value.toUpperCase())
  };

  const updateSearch = e => { 
    
    setUserInput(e?.target?.value);
    setSearch(e?.target?.value);

  }

  const debounceOnChange = debounce(updateSearch, 1000);


  const handleClick = (e) => {

    if (setUserInput !== '') {

      const options = 
      {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json'
        },
        body: JSON.stringify({userInput}),
      };
  
      const response = fetch(`/api/search`, options);
      console.log("search entered");
    };
  }

  const handleStates = e => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  // from StockSearchBar


  return (

    <>
    <div className="searchBar">
      <label>Enter a Stock Symbol: </label>
      <input  type='text' onChange={debounceOnChange} onKeyPress={(ev) => {
        if (ev.key === "Enter") {
          handleButtonEvents();
    }
  }
}
      placeholder={userInput} required/>
      <Button variant="success" type="submit" onClick={handleButtonEvents}>Search</Button>
    </div>


    <div className='chartwrapper'>
      <div className='chartcont'>
      { typeof stockDates !== 'undefined'  ?
          <Line data={data} height={500} width={700} options={options} />
          :
          <> 
          <p> We are limited to 5 chart requests per minute
            <br></br>
            If you haven't made 5 chart requests recently, try to refresh the page
            <br></br>
            <br></br>
            <span className='boldSpan'>Charts only work for stocks</span > on this page.
            <br></br>
            <br></br>
            Sorry for the inconvenience!
            </p>
          </>
      }
        </div>
      </div>
    </>
    );
  }
    


export default LineChart;