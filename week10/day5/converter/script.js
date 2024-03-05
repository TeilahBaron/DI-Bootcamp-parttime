function convert() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            document.getElementById("result").innerText = `${amount} ${fromCurrency} equals ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
