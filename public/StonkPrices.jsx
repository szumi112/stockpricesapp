import React from 'react'

const StonkPrices = () => {
    const getPriceAAPL = async () => {
        const res = await fetch('aaplPrice.csv');
        const resp = await res.text();
        document.querySelector(".priceaapl").innerHTML = resp;
        console.log(getPriceAAPL)
    }
    
    getPriceAAPL();
    
    const getSymbolAAPL = async () => {
        const res = await fetch('aaplSymbol.csv');
        const resp = await res.text();
        document.querySelector(".symbolaapl").innerHTML = resp;
    
    }
    
    getSymbolAAPL();
    
    const getPercentChangeAAPL = async () => {
        const res = await fetch('aaplPercentChange.csv');
        const resp = await res.text();
        document.querySelector(".percentchangeaapl").innerHTML = resp;
    
    }
    
    getPercentChangeAAPL();
  return (
    <div>
        {getPriceAAPL}
    </div>
  )
}

export default StonkPrices