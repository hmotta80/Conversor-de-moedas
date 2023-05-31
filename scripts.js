const button = document.getElementById("convert_button")
const select = document.getElementById("change-select")


const convertValue = async () => {
    const input = document.getElementById("input_real").value
    const realValue = document.getElementById("real-value")
    const foreignerValue = document.getElementById("foreigner-value")
 
    const convert  = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => { return response.json()})

    const dolar = convert.USDBRL.high
    const euro = convert.EURBRL.high

    
    if (select.value === "US$ Dólar Americano") {
        foreignerValue.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input / dolar);
    }

    if (select.value === "€ Euro") {
        foreignerValue.innerHTML = new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(input / euro);
    }

    realValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input);

}


const changeCurrency = () => {

    const currencyName = document.getElementById("change-name")
    const currencyImg = document.getElementById("change-img")


    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar"
    }
    if (select.value === "US$ Dólar Americano") {
        currencyImg.src = "./img/estados-unidos (1) 1.png"
    }


    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
    }
    if (select.value === "€ Euro") {
        currencyImg.src = "./img/Design sem nome 1.png"
    }

    convertValue()

}

button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrency)