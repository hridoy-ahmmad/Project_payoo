document.getElementById('btn-withdraw')
    .addEventListener('click', function () {
        // 1. get the number and validate
        const inputNumber = document.getElementById('inputNumber')
        const number = inputNumber.value
        console.log(number);
        if (number != '01721132610') {
            alert('Invalid Number')
            return;
        }

        // 2. get the amount
        const amountInput = document.getElementById('inputAmount')
        const amount = amountInput.value
        console.log(amount);
        // 3. get the current balance
        const balance = document.getElementById('balance')
        const balanceValue = balance.innerText

        // 4. calculate 
        const newBalance = Number(balanceValue) - Number(amount)
        if (newBalance < 0) {
            alert('invalid Ammount')
            return
        }
        // 5. get the password and validate
        const inputPin = document.getElementById('inputPin')
        const pin = inputPin.value
        if (pin != '1234') {
            alert('Invalid Pin')
            return;
        } 
        balance.innerText = newBalance
        alert('CashOut successful')
    })
