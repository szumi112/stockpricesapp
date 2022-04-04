const getPriceAAPL = async () => {
    const res = await fetch('aaplPrice.csv');
    const resp = await res.text();
    document.querySelector(".priceaapl").innerHTML = resp;
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

    const wordToArr = function(str) {
        return [...str]
    };
    const arr = wordToArr(resp);
    if(arr[1] == "+") {
    document.querySelector(".percentchangeaapl").style.color = "green"
    } else if (arr[1] == "-") {
        document.querySelector(".percentchangeaapl").style.color = "red";
    } else {
        document.querySelector(".percentchangeaapl").style.color = "black"
    }

}

getPercentChangeAAPL();