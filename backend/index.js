// IMPORTS
const request = require("request-promise");
const fs = require("fs");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const Stock = require("./model/Stock");
const express = require("express");
const cors = require("cors");
const cron = require('node-cron');
const app = express();


async function connectToMongoDB() {
    await mongoose.connect("mongodb+srv://szumi112:szumek112@cluster0.ctjxj.mongodb.net/Cluster0?retryWrites=true&w=majority");
    console.log("connected to mongodb");
};


//WEB-SCRAPE || FETCH CURRENT STOCK DATA
async function tsla() {


    const html = await request.get(
        "https://finance.yahoo.com/quote/BTC-USD/"
        );

    const $ = await cheerio.load(html);

    const Price = $('[class="Fw(b) Fz(36px) Mb(-4px) D(ib)"]').text();
    const Symbol = $('[class="D(ib) Fz(18px)"]').text();
    const PercentChange = $('fin-streamer[class="Fw(500) Pstart(8px) Fz(24px)"][data-field="regularMarketChangePercent"]').find('span').text();


    await connectToMongoDB();
        /*
    const listingModel = new Tsla({
        price: Price, 
        symbol: Symbol, 
        percentChange: PercentChange,
    });
    */

    // await listingModel.save();

    // UPDATE stock price if it changed
    await Stock.findOneAndUpdate(
        {
            symbol: "Tesla (TSLA)",
        }, 
        {
        price: Price, 
        symbol: "Tesla (TSLA)", 
        percentChange: PercentChange,
        },
        {
            upsert: true
        }
        );

    
    
        console.log(Price)
    setTimeout(tsla, 30000); // 60 seconds == 1minute // not needed with node-cron


    
   
}

tsla();

async function aapl() {


    const html = await request.get(
        "https://finance.yahoo.com/quote/AAPL/"
        );

    const $ = await cheerio.load(html);

    const Price = $('[class="Fw(b) Fz(36px) Mb(-4px) D(ib)"]').text();
    const Symbol = $('[class="D(ib) Fz(18px)"]').text();
    const PercentChange = $('fin-streamer[class="Fw(500) Pstart(8px) Fz(24px)"][data-field="regularMarketChangePercent"]').find('span').text();


    await connectToMongoDB();

 /*   const listingModel = new Aapl({
        price: Price, 
        symbol: Symbol, 
        percentChange: PercentChange,
    });

    await listingModel.save();

    */

    // UPDATE stock price if it changed
    await Stock.findOneAndUpdate(
        {
            symbol: "Apple (AAPL)",
        }, 
        {
        price: Price, 
        symbol: "Apple (AAPL)", 
        percentChange: PercentChange,
        },
        {
            upsert: true
        }
        );
    
    

    console.log(Price)
    setTimeout(aapl, 30000); // 60,000 = 60 seconds == 1minute // not needed with node-cron
    
}

aapl();


async function spy() {


    const html = await request.get(
        "https://finance.yahoo.com/quote/spy/"
        );

    const $ = await cheerio.load(html);

    const Price = $('[class="Fw(b) Fz(36px) Mb(-4px) D(ib)"]').text();
    const Symbol = $('[class="D(ib) Fz(18px)"]').text();
    const PercentChange = $('fin-streamer[class="Fw(500) Pstart(8px) Fz(24px)"][data-field="regularMarketChangePercent"]').find('span').text();


    await connectToMongoDB();

    console.log(Price)
    setTimeout(spy, 30000); // 60,000 = 60 seconds == 1minute // not needed with node-cron

    /*const listingModel = new Spy({
        price: Price, 
        symbol: Symbol, 
        percentChange: PercentChange,
    });

    await listingModel.save(); */

    // UPDATE stock price if it changed
    await Stock.findOneAndUpdate(
        {
            symbol: "SPDR S&P 500 ETF (SPY)",
        }, 
        {
        price: Price, 
        symbol: "SPDR S&P 500 ETF (SPY)", 
        percentChange: PercentChange,
        },
        {
            upsert: true
        }
        );

}

spy();

async function nvda() {


    const html = await request.get(
        "https://finance.yahoo.com/quote/nvda/"
        );

    const $ = await cheerio.load(html);

    const Price = $('[class="Fw(b) Fz(36px) Mb(-4px) D(ib)"]').text();
    const Symbol = $('[class="D(ib) Fz(18px)"]').text();
    const PercentChange = $('fin-streamer[class="Fw(500) Pstart(8px) Fz(24px)"][data-field="regularMarketChangePercent"]').find('span').text();

    await connectToMongoDB();

    console.log(Price)
     setTimeout(nvda, 30000); // 60,000 = 60 seconds == 1minute // not needed with node-cron


   /* const listingModel = new Nvda({
        price: Price, 
        symbol: Symbol, 
        percentChange: PercentChange,
    });

    await listingModel.save(); */

    // UPDATE stock price if it changed
    await Stock.findOneAndUpdate(
        {
            symbol: "NVIDIA (NVDA)",
        }, 
        {
        price: Price, 
        symbol: "NVIDIA (NVDA)", 
        percentChange: PercentChange,
        },
        {
            upsert: true
        }
        );
}

nvda();

 

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

// DATABASE

app.get("/", (req, res) => {
    Stock.find({}).then(
        items => res.json(items)
    ).catch(err => console.log(err))
});

app.listen(3001, function () {
    console.log("Server is running...");
});



  
  // node index.js