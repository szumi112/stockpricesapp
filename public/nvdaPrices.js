const getPricenvda = async () => {
    const res = await fetch('nvdaPrice.csv');
    const resp = await res.text();
    document.querySelector(".pricenvda").innerHTML = resp;
    console.log(getPricenvda)
}

getPricenvda();

const getSymbolnvda = async () => {
    const res = await fetch('nvdaSymbol.csv');
    const resp = await res.text();
    document.querySelector(".symbolnvda").innerHTML = resp;

}

getSymbolnvda();

const getPercentChangenvda = async () => {
    const res = await fetch('nvdaPercentChange.csv');
    const resp = await res.text();
    document.querySelector(".percentchangenvda").innerHTML = resp;

    const wordToArr = function(str) {
        return [...str]
    };
    const arr = wordToArr(resp);
    if(arr[1] == "+") {
    document.querySelector(".percentchangenvda").style.color = "green"
    } else if (arr[1] == "-") {
        document.querySelector(".percentchangenvda").style.color = "red";
    } else {
        document.querySelector(".percentchangenvda").style.color = "black"
    }

}

getPercentChangenvda();