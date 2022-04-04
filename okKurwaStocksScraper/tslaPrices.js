const getPrice = async () => {
    const res = await fetch('tslaPrice.csv');
    const resp = await res.text();
    document.querySelector(".pricetsla").innerHTML = resp;
    console.log(getPrice)
}

getPrice();

const getSymbol = async () => {
    const res = await fetch('tslaSymbol.csv');
    const resp = await res.text();
    document.querySelector(".symboltsla").innerHTML = resp;

}

getSymbol();

const getPercentChangetsla = async () => {
    const res = await fetch('tslaPercentChange.csv');
    const resp = await res.text();
    document.querySelector(".percentchangetsla").innerHTML = resp;

}

getPercentChangetsla();