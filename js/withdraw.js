document.getElementById('withdraw-Buttom').addEventListener('click', function () {


    //  const password =prompt(("Please enter your name", "Harry Potter"))
    const password = prompt("Please Enter Your Psssword");
    if (password == 'secret') {





        // user input amount 
        const withdrawInputAmount = document.getElementById('withdraw-input');
        const newtwithdrawAmountString = withdrawInputAmount.value;
        const newtwithdrawAmount = parseFloat(newtwithdrawAmountString)
        // console.log(newtwithdrawAmount);

        // clear input data 

        withdrawInputAmount.value = " ";

        if (newtwithdrawAmount < 1) {
            alert("please provite a valid number")
            return;
        }
        // previous Amount 
        const previousTotal = document.getElementById('Withdraw-total');
        const previousTotalAmountString = previousTotal.innerText;
        const previousTotalAmount = parseFloat(previousTotalAmountString)
        console.log(previousTotalAmount);

        //   previous total  balance
        const previousTotalBalance = document.getElementById('total-balance');
        const previousTotalBalanceString = previousTotalBalance.innerText;
        const previousBalance = parseFloat(previousTotalBalanceString)

        if (newtwithdrawAmount > previousBalance) {

            alert("your account doesn't have enough money");
            return;

        }

        // add total deposit Amount
        const currentDepositTotalAmount = newtwithdrawAmount + previousTotalAmount;
        previousTotal.innerText = currentDepositTotalAmount;

        // add totoa balance amout 
        const currentTotalBlance = previousBalance - newtwithdrawAmount;
        previousTotalBalance.innerText = currentTotalBlance;




    } else {
        alert("Don't you remember the password?!! Enter the password you entered while logging in")
    }





})