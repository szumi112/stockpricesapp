import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'
import './coin.css'

const port = process.env.PORT || 5000;


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    })
    .catch(error => (console.log(error)))
  })

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>
          Search a currency 
          </h1>
          <form>
            <input type='text' placeholder='Search' className='coin-input' onChange={handleChange}>

            </input>
          </form>
      </div>
      <div className='coin-description'>
          <ul>
            <div className="coin">
            <li className>Logo</li>
            <li>Name</li>
            <li>Symbol</li>
            </div>
            <div className="coin-data">
              <li>Price</li>
              <li>Market Cap</li>
              <li>24h Change</li>
            </div>
          </ul>
        </div>
      {filteredCoins.map(coin => {
        return (
          <Coin 
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketCap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          />
        )
      })}
    </div>
  );
}

export default App;
