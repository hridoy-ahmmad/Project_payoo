function getValueFromInput(id) {
    const input = document.getElementById(id)
    const value = input.value
    return value;

}

function getBalance() {
    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText
    console.log(Number(balance));
    return Number(balance);

}

function setBalance(value) {
    const balanceElement = document.getElementById('balance')
    balanceElement.innerText = value
}
function showElementById(id) {
    const addMOney = document.getElementById('addMoney')
    const CashOut = document.getElementById('cashOut')

    addMOney.classList.add('hidden')
    CashOut.classList.add('hidden')

    const selected = document.getElementById(id)
    selected.classList.remove('hidden')
}