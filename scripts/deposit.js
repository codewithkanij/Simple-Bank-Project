// step-1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
    console.log('clicked deposit btn');

    // step-2: get the deposite amount from the deposit input field

    const depositField = document.getElementById('deposit-field');

    // step-3: get the value of input field

    const newDepositAmountString = depositField.value;
    console.log(newDepositAmountString);   // to show the value 

    // step- 4: convert string to float of deposit input field

    const newDepositAmount = parseFloat(newDepositAmountString);


    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-5: get the deposite total field

    const depositTotalField = document.getElementById('deposit-total-field');
    console.log(depositTotalField);
    console.log(typeof depositTotalField);    // to show the type

    // step-6: get the inner text of the deposit total field

    const previousDepositeTotalString = depositTotalField.innerText;
    console.log(previousDepositeTotalString);   // to show the innerText
    console.log(typeof previousDepositeTotalString);  // to show the type

    // step-7: convert string to float

    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    console.log(typeof previousDepositeTotal);

    // step-8: add previous deposite and new deposite amount

    const currentDepositeTotal = previousDepositeTotal + newDepositAmount;

    // step-9: set current deposite total to the inner text of  deposite total field

    depositTotalField.innerText = currentDepositeTotal;

    // step-10: balance a add kora
    // get the balance total field

    const balanceTotalField = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalField.innerText;

    // step-11: convert string to float

    const balanceTotalAmount = parseFloat(balanceTotalElementString);

    // step-12: calculate the final balance

    const finalBlanace = balanceTotalAmount + newDepositAmount;

    // step-13: final balance as inner text of balance total field

    balanceTotalField.innerText = finalBlanace;

    // step-14: clear the deposit field after set the deposite total field

    depositField.value = '';

})

