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

    const wordToArr = function(str) {
        return [...str]
    };
    const arr = wordToArr(resp);
    if(arr[1] == "+") {
    document.querySelector(".percentchangespy").style.color = "green"
    } else if (arr[1] == "-") {
        document.querySelector(".percentchangespy").style.color = "red";
    } else {
        document.querySelector(".percentchangespy").style.color = "black"
    }

}

getPercentChangespy();