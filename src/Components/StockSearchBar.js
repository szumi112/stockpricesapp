// import { useState } from "react";
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { SearchContext } from '../searchContext';
import debounce from 'lodash.debounce';

const StockSearchBar = () => {
   
  function handleButtonEvents(e) {
		debounceOnChange();
    setTimeout(() => window.location.reload(), 3000);
	}

  // const [userInput, setUserInput] = useState("Stock or Crypto Symbol");
  const [search, setSearch] = useContext(SearchContext);

/*
  const handleSearch = e => {
    e.preventDefault();
    setSearch(e.target.value.toUpperCase())
  };
  */

  const updateSearch = e => setSearch(e?.target?.value);

  const debounceOnChange = debounce(updateSearch, 1000);

  /*
  const handleClick = (e) => {

    if (setSearch !== '') {

      const options = 
      {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json'
        },
        body: JSON.stringify({search}),
      };
  
      const response = fetch(`http://localhost:3001/api/search`, options);
      console.log("search entered" + response);
    };
  }
  */

  return (
      
      <>
    <div className="searchBar">
      
      <label>Look for Stocks or Cryptos: </label>
      <input  type='text' onChange={debounceOnChange} onKeyPress={(ev) => {
        if (ev.key === "Enter") {
          handleButtonEvents();
    }
  }
}
      placeholder={search} required/>
      <Button variant="success" type="submit" onClick={handleButtonEvents}>Search</Button>
      <p> Currently displaying: {search}</p>
      <div>
      
      </div>
    </div>
    </>
  );
};

export default StockSearchBar;