document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log("hello Login js")
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    const error = document.getElementById('error');
    // console.log(email, password)

    // just verifi email and password 
    if (email === 'ashik@m.com' && password == 'secret') {
        window.location = 'bank.html'
        error.innerText = ''
    } else {
        alert(" apni ki password bole gesen naki !!! tahole bank kotipokko ar sathe kotha volen plz :- 01836194129")
        error.innerText = "Please see Email and Password then type"
    }

})