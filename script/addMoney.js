document.getElementById('btnAddmoney')
    .addEventListener('click', function () {
        //1. get the bank 
        const bank = getValueFromInput('selectBank')
        if (bank == 'Select Bank') {
            alert('Please Select a bank')
            return;
        }
        //2. get bank account Number and validate
        const bankNumber = getValueFromInput('addMoneyNumber')
        if (bankNumber.length < 11) {
            alert('invalid number')
            return;
        }
        //3.get input balance and main balance and calculate
        const inputAddAmount = getValueFromInput('inputAddAmount')
        const mainBalance = getBalance()
        const currentBalance = mainBalance + Number(inputAddAmount)

        //4. get pin and validate
        const pin = getValueFromInput('inputPin')
        if (pin != '1234') {
            alert('Pin is not valid')
            return;
        } else {
            setBalance(currentBalance)
            alert('Add money Successful')
        }
    })

