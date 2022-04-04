const getPricespy = async () => {
    const res = await fetch('spyPrice.csv');
    const resp = await res.text();
    document.querySelector(".pricespy").innerHTML = resp;
    console.log(getPricespy)
}

getPricespy();

const getSymbolspy = async () => {
    const res = await fetch('spySymbol.csv');
    const resp = await res.text();
    document.querySelector(".symbolspy").innerHTML = resp;

}

getSymbolspy();

const getPercentChangespy = async () => {
    const res = await fetch('spyPercentChange.csv');
    const resp = await res.text();
    document.querySelector(".percentchangespy").innerHTML = resp;

}

getPercentChangespy();