const request = require("request-promise");
const fs = require("fs");
const cheerio = require("cheerio");

const http = require("http");


async function tsla() {
    const html = await request.get(
        "https://finance.yahoo.com/quote/BTC-USD/"
        );

    const $ = await cheerio.load(html);

    const Price = $('[class="Fw(b) Fz(36px) Mb(-4px) D(ib)"]').text();
    const Symbol = $('[class="D(ib) Fz(18px)"]').text();
    const PercentChange = $('fin-streamer[class="Fw(500) Pstart(8px) Fz(24px)"][data-field="regularMarketChangePercent"]').find('span').text();
    fs.writeFileSync("./public/tslaSymbol.csv", Symbol);
    fs.writeFileSync("./public/tslaPrice.csv", Price);
    fs.writeFileSync("./public/tslaPercentChange.csv", PercentChange)
    
        console.log(Price)
    setTimeout(tsla, 1000); //60 seconds == 1minute
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
    fs.writeFileSync("./public/aaplSymbol.csv", Symbol);
    fs.writeFileSync("./public/aaplPrice.csv", Price);
    fs.writeFileSync("./public/aaplPercentChange.csv", PercentChange)
    

    console.log(Price)
    setTimeout(aapl, 1000); // 60,000 = 60 seconds == 1minute
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
    fs.writeFileSync("./public/spySymbol.csv", Symbol);
    fs.writeFileSync("./public/spyPrice.csv", Price);
    fs.writeFileSync("./public/spyPercentChange.csv", PercentChange)

    console.log(Price)
    setTimeout(spy, 1000); // 60,000 = 60 seconds == 1minute
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
    fs.writeFileSync("./public/nvdaSymbol.csv", Symbol);
    fs.writeFileSync("./public/nvdaPrice.csv", Price);
    fs.writeFileSync("./public/nvdaPercentChange.csv", PercentChange)

    console.log(Price)
    setTimeout(nvda, 1000); // 60,000 = 60 seconds == 1minute
}

nvda();

