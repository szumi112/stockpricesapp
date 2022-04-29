import { useState } from "react";
import Button from 'react-bootstrap/Button';
const baseUrl = process.env.baseURL || "http://localhost:3001"

const StockSearchBar = () => {

  function handleButtonEvents() {
		handleClick();
    setTimeout(() => window.location.reload(), 3000);
	}

  const [userInput, setUserInput] = useState("Stock or Crypto Symbol");

  const handleSearch = e => {
    setUserInput(e.target.value)
  }


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
  
      const response = fetch(`${baseUrl}/search`, options);
      console.log("search entered");
      console.log(response)
    };
      /*
      .then(
        () => {
          console.log("Search entered");
        }
      );
      */

     // console.log(searchResult);
      }


  
  return (
      
      <>
    <div className="searchBar">
      <label>Look for Stocks or Cryptos: </label>
      <input  type='text' onChange={handleSearch} onKeyPress={(ev) => {
        if (ev.key === "Enter") {
          handleButtonEvents();
        }
      }

      }
      
      placeholder={userInput} required/>
      <Button variant="success" type="submit" onClick={handleButtonEvents}  >Search</Button>
    </div>
    </>
  );
};

export default StockSearchBar;