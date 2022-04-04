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
    const wordToArr = function(str) {
        return [...str]
    };
    const arr = wordToArr(resp);
    if(arr[1] == "+") {
    document.querySelector(".percentchangetsla").style.color = "green"
    } else if (arr[1] == "-") {
        document.querySelector(".percentchangetsla").style.color = "red";
    } else {
        document.querySelector(".percentchangetsla").style.color = "black"
    }

}

getPercentChangetsla();