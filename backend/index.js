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
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const { db, update } = require("./model/Stock");
const arrayOfSearchResults = [];
const URI = process.env.URI || "mongodb+srv://szumi112:szumek112@cluster0.ctjxj.mongodb.net/Cluster0?retryWrites=true&w=majority";
const path = require('path');
const BASEURL = process.env.BASEURL;
const dotenv = require('dotenv');

dotenv.config();


async function connectToMongoDB() {
    await mongoose.connect("mongodb+srv://szumi112:szumek112@cluster0.ctjxj.mongodb.net/Cluster0?retryWrites=true&w=majority");
    console.log("connected to db");
};

connectToMongoDB();


async function fetchPrice(userSymbol) {

    const html = await request.get(
        `https://finance.yahoo.com/quote/${userSymbol}/`
        );
        

    const $ = await cheerio.load(html);

    const Price = $('[class="Fw(b) Fz(36px) Mb(-4px) D(ib)"]').text();
    const Symbol = $('[class="D(ib) Fz(18px)"]').text();
    const PercentChange = $('fin-streamer[class="Fw(500) Pstart(8px) Fz(24px)"][data-field="regularMarketChangePercent"]').find('span').text();


    await connectToMongoDB();
    
    if (Stock.exists({symbol: userSymbol})) {

        // UPDATE stock price if it changed

        await Stock.findOneAndUpdate(
            {
                symbol: userSymbol,
            }, 
            {
            price: Price, 
            symbol: userSymbol, 
            percentChange: PercentChange,
            },
            {
                upsert: true,
            },
            );
    
            console.log("Updated: " + Price)
            //setTimeout(() => fetchPrice, 2500); // 60 seconds == 1minute
            //setTimeout(() => userSymbol, 2500); // 60 seconds == 1minute
            //setTimeout(() => fetchPrice(), 2500); // 60 seconds == 1minute
            // setTimeout(() => fetchPrice(userSymbol), 10000); // 60 seconds == 1minute

        
    }  else {

        const listingModel = await new Stock({
            price: Price, 
            symbol: Symbol, 
            percentChange: PercentChange,
        })

        console.log("Added: " + result)

}; 
}

async function deleteStock(stonkSymbol) {
    await Stock.findByIdAndDelete({_id: stonkSymbol}).clone()
};


//MIDDLEWARE

app.use(cors({
    origin: "*"
}));

// static frontend

app.use(express.static("public"));


//Parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//Parse json data
 app.use(bodyParser.json())

// DATABASE

/*

const register = async (req, res) => {
    try {
        const {name, email, password, } = req.body
        if(password.length < 6) 
            return res.status(400).json({success:false, messsage:
            "Password must be at least 6 characters long"});
        
        const emailLowerCase = email.toLowerCase();
        const existedUser = await User.findOne({email:emailLowerCase})
        
        if(existedUser) 
            return res.status(400).json({success: false, message:"User already exists!"})
        
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            name,
            email: emailLowerCase,
            password: hashedPassword
        });
        const {_id:id} = user;
        const token = jwt.sign({id, name}, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.status(201).json({success: true, result:{id, name, email:user.email, token}})

    } catch (error) { 
        console.log(error)
        res.status(500).json({success: false, message:"Something went wrong"})
    }
};

*/


app.get("/api", (req, res) => {
    Stock.find({}).then(
        items => res.json(items)
    ).catch(err => console.log(err))
});

app.get("/api/search", (req, res) => {

    res.json("Nothing to see here");    
});

app.get("/api/refresh", (req, res) => {

    res.json("Nothing to see here");
});

app.get("/api/delete", (req, res) => {
    res.json("Delete server page - nothing to see here")
})

app.post("/api/search", async (req, res) => {

    const result = req.body.userInput;
    fetchPrice(result);
});

app.post("/api/refresh", async (req, res) => {

    const refresh = req.body.res;
    fetchPrice(refresh);

});

app.post("/api/delete", async (req, res)=> {
    const stonkSymbol = req.body.res;
    console.log(stonkSymbol);
    deleteStock(stonkSymbol);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.listen(PORT, function () {
    console.log("Server is running...");
});






























//WEB-SCRAPE || FETCH CURRENT STOCK DATA

/*
async function tsla() {


    const html = await request.get(
        "https://finance.yahoo.com/quote/tsla/"
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
    /*
    await Stock.findOneAndUpdate(
        {
            symbol: Symbol,
        }, 
        {
        price: Price, 
        symbol: Symbol, 
        percentChange: PercentChange,
        },
        {
            upsert: true
        }
        );

    
    
        console.log(Price)
    setTimeout(tsla, 10000); // 60 seconds == 1minute // not needed with node-cron


    
   
}

tsla();


async function btc() {


    const html = await request.get(
        "https://finance.yahoo.com/quote/BTC-USD/"
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
    /*
    await Stock.findOneAndUpdate(
        {
            symbol: Symbol,
        }, 
        {
        price: Price, 
        symbol: Symbol, 
        percentChange: PercentChange,
        },
        {
            upsert: true
        }
        );
    
    

    console.log(Price)
    setTimeout(btc, 10000); // 60,000 = 60 seconds == 1minute // not needed with node-cron
    
}

btc();
*/

/*
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
    setTimeout(spy, 1000000); // 60,000 = 60 seconds == 1minute // not needed with node-cron

    /*const listingModel = new Spy({
        price: Price, 
        symbol: Symbol, 
        percentChange: PercentChange,
    });

    await listingModel.save(); */

    // UPDATE stock price if it changed
    /*
    await Stock.findOneAndUpdate(
        {
            symbol: "SPY",
        }, 
        {
        price: Price, 
        symbol: "SPY", 
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
     setTimeout(nvda, 1000000); // 60,000 = 60 seconds == 1minute // not needed with node-cron


   /* const listingModel = new Nvda({
        price: Price, 
        symbol: Symbol, 
        percentChange: PercentChange,
    });

    await listingModel.save(); */

    // UPDATE stock price if it changed
    /*
    await Stock.findOneAndUpdate(
        {
            symbol: "NVDA",
        }, 
        {
        price: Price, 
        symbol: "NVDA", 
        percentChange: PercentChange,
        },
        {
            upsert: true
        }
        );
}

nvda(); 

*/