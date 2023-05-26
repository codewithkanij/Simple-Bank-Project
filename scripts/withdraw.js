// step-1: add event listener to the withdraws button

document.getElementById('btn-withdraw').addEventListener('click', function () {
    console.log('clicked withdraw btn');

    // step-2: get the deposite amount from the deposit input field

    const withdrawField = document.getElementById('withdraw-field');

    // step-3: get the value

    const newWithdrawAmountString = withdrawField.value;
    console.log(newWithdrawAmountString);

    // step-4: convert string to float of deposit input field

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(typeof newWithdrawAmount);

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-5: get the withdraw total field

    const withdrawTotalField = document.getElementById('withdraw-total-field');

    // step-6: get the inner text of the deposit total field

    const previousWithdrawTotalString = withdrawTotalField.innerText;
    console.log(previousWithdrawTotalString);

    // step-7: convert string to float

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    // step-8: add previous deposite and new deposite amount

    const currentWitdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // step-9: set current deposite total to the inner text of  deposite total field

    withdrawTotalField.innerText = currentWitdrawTotal;

    // step-6: 

    const balanceTotalField = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (previousBalanceTotal > newWithdrawAmount) {
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotalField.innerText = newBalanceTotal;
    }
    else {
        alert('You\'ve not enough balance! Baap er bank a eto tk nai');
        return;
    }

    // step-7: clear the withdraw field after change the withdraw total field

    withdrawField.value = '';

})