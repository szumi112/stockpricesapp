const request = require("request-promise");
const fs = require("fs");
const cheerio = require("cheerio");



async function tsla() {
    const html = await request.get(
        "https://finance.yahoo.com/quote/TSLA/"
        );

    const $ = await cheerio.load(html);

    const Price = $('[class="Fw(b) Fz(36px) Mb(-4px) D(ib)"]').text();
    const Symbol = $('[class="D(ib) Fz(18px)"]').text();
    const PercentChange = $('fin-streamer[class="Fw(500) Pstart(8px) Fz(24px)"][data-field="regularMarketChangePercent"]').find('span').text();
    fs.writeFileSync("./tslaSymbol.csv", Symbol);
    fs.writeFileSync("./tslaPrice.csv", Price);
    fs.writeFileSync("./tslaPercentChange.csv", PercentChange)
    
    console.log(Price);
    console.log(Symbol);
    console.log(PercentChange)

    setTimeout(tsla, 30000); //60 seconds == 1minute
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
    fs.writeFileSync("./aaplSymbol.csv", Symbol);
    fs.writeFileSync("./aaplPrice.csv", Price);
    fs.writeFileSync("./aaplPercentChange.csv", PercentChange)
    
    
    console.log(Price);
    console.log(Symbol);

    setTimeout(aapl, 30000); // 60,000 = 60 seconds == 1minute
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
    fs.writeFileSync("./spySymbol.csv", Symbol);
    fs.writeFileSync("./spyPrice.csv", Price);
    fs.writeFileSync("./spyPercentChange.csv", PercentChange)
    
    console.log(Price);
    console.log(Symbol);
    console.log(PercentChange);

    setTimeout(spy, 30000); // 60,000 = 60 seconds == 1minute
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
    fs.writeFileSync("./nvdaSymbol.csv", Symbol);
    fs.writeFileSync("./nvdaPrice.csv", Price);
    fs.writeFileSync("./nvdaPercentChange.csv", PercentChange)
    
    console.log(Price);
    console.log(Symbol);
    console.log(PercentChange);

    setTimeout(nvda, 30000); // 60,000 = 60 seconds == 1minute
}

nvda();