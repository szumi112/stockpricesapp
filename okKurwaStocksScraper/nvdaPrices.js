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

}

getPercentChangenvda();