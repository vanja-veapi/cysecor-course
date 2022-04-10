const inflationRate = document.querySelector("#inflationRate");
const money = document.querySelector("#money");
const years = document.querySelector("#years");

const btnCalculate = document.querySelector("#btnCalculate");
const newValue = document.querySelector("#newValue");

window.addEventListener("load", () => btnCalculate.addEventListener("click", calculateInflation));

function calculateInflation() {
    let total = 0;

    total = Number(money.value);
    for (let i = 0; i < Number(years.value); i++) {
        total = total * (1 + Number(inflationRate.value) / 100);
    }
    return newValue.textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(total);
}