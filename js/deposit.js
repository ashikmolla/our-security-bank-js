document.getElementById('deposit-Buttom').addEventListener('click', function () {
    // user input amount 
    const depositInputAmount = document.getElementById('deposit-input');
    const newtDepositAmountString = depositInputAmount.value;
    const newtDepositAmount = parseFloat(newtDepositAmountString)
    console.log(newtDepositAmount);
    // previous Amount 
    const previousTotal = document.getElementById('deposit-total');
    const previousTotalAmountString = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString)
    console.log(previousTotalAmount);

//   previous total  balance
const previousTotalBalance =document.getElementById('total-balance');
const previousTotalBalanceString=previousTotalBalance.innerText;
const previousBalance= parseFloat(previousTotalBalanceString)
  
  
  
  // add total deposit Amount
    const currentDepositTotalAmount = newtDepositAmount + previousTotalAmount;
    previousTotal.innerText = currentDepositTotalAmount;

    // add totoa balance amout 
    const currentTotalBlance=previousBalance + newtDepositAmount;
    previousTotalBalance.innerText = currentTotalBlance;






    // clear input data 

    depositInputAmount.value = " ";



})