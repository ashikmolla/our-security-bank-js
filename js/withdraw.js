document.getElementById('withdraw-Buttom').addEventListener('click', function () {


    //  const password =prompt(("Please enter your name", "Harry Potter"))
    const password = prompt("Please Enter Your Psssword");
    if (password == 'secret') {





        // user input amount 
        const withdrawInputAmount = document.getElementById('withdraw-input');
        const newtwithdrawAmountString = withdrawInputAmount.value;
        const newtwithdrawAmount = parseFloat(newtwithdrawAmountString)
        // console.log(newtwithdrawAmount);
        // previous Amount 
        const previousTotal = document.getElementById('Withdraw-total');
        const previousTotalAmountString = previousTotal.innerText;
        const previousTotalAmount = parseFloat(previousTotalAmountString)
        console.log(previousTotalAmount);

        //   previous total  balance
        const previousTotalBalance = document.getElementById('total-balance');
        const previousTotalBalanceString = previousTotalBalance.innerText;
        const previousBalance = parseFloat(previousTotalBalanceString)



        // add total deposit Amount
        const currentDepositTotalAmount = newtwithdrawAmount + previousTotalAmount;
        previousTotal.innerText = currentDepositTotalAmount;

        // add totoa balance amout 
        const currentTotalBlance = previousBalance - newtwithdrawAmount;
        previousTotalBalance.innerText = currentTotalBlance;





        // clear input data 

        withdrawInputAmount.value = " ";

    }else{
        alert("Don't you remember the password?!! Enter the password you entered while logging in")
    }





})