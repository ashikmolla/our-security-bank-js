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
        alert("if You have forgotten your password !! please contact the bank authority:- 01836194129 / https://www.facebook.com/profile.php?id=100049388054800")
        error.innerText = "Please see Email and Password then type"
    }

})