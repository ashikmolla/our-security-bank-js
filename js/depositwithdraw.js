 /*
        -------------------------------
           deposit amount 
        ---------------------------------
   
        // step -1 : add event /listener
        document.getElementById('deposit-Buttom').addEventListener('click', function(){
            //   step -2: get the deposit amount for thml
                const depositInputNumber = document.getElementById('deposit-input-number');
               const DepositAmountString =depositInputNumber.value;
               const DepositAmount = parseFloat(DepositAmountString);
               //    step-3 : get the current deposit total
              const depositTotalElement = document.getElementById('deposit-total');
              const previousDepositTotalString =depositTotalElement.innerText;
              const previousDepositTotal = parseFloat(previousDepositTotalString);
            //    step-4 : add amunt number   
              const currentDepositTotalAmount =DepositAmount + previousDepositTotal;
              depositTotalElement.innerText = currentDepositTotalAmount;
            //   stap-5: get ballance add new balance
            const balanceTotalNembet = document.getElementById('balance-total-number');
            const balanceTotalString = balanceTotalNembet.innerText;
            const balanceTotal = parseFloat(balanceTotalString) ;
            // step-6 current Balance
            const currentBalanceTotalNembet =balanceTotal + DepositAmount;
            balanceTotalNembet.innerText = currentBalanceTotalNembet;
    
            
            //   step -7: clear the depositAmount
            depositInputNumber.value ='';
            });
    
    
             
            // -------------------------------
            //    withdraw  amount 
            // ---------------------------------
            
           
           
            document.getElementById('withdraw-Buttom').addEventListener('click', function(){
            //   step -2: get the deposit amount for thml
            const withdrawInputNumber = document.getElementById('withdraw-input-number');
               const withdrawAmountString =withdrawInputNumber.value;
               const withdrawAmount = parseFloat(withdrawAmountString);
               //    step-3 : get the current deposit total
    
              const withdrawTotalElement = document.getElementById('Withdraw-total');
              const previousWithdrawTotalString =withdrawTotalElement.innerText;
              const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
            //    step-4 : add amunt number   
              const currentWithdrawTotalAmount =withdrawAmount + previousWithdrawTotal;
              withdrawTotalElement.innerText = currentWithdrawTotalAmount;
           
           
              //   stap-5: get ballance add new balance
    
            const balanceTotalNembet = document.getElementById('balance-total-number');
            const balanceTotalString = balanceTotalNembet.innerText;
            const balanceTotal = parseFloat(balanceTotalString) ;
    
            // step-6 current Balance
            const currentBalanceTotalNembet =balanceTotal - withdrawAmount;
            balanceTotalNembet.innerText = currentBalanceTotalNembet;
    
            
            //   step -7: clear the withdrewAmount
            withdrawInputNumber.value ='';
            });
    

                 */
    
    