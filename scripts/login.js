// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {

    // step-2: get the email address inside the email input field
    // always remember to use '.value' to get the text from an input field

    const emailField = document.getElementById('user-input');
    const email = emailField.value;

    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password)


    // DANGER: DO NOT VERIFY Email and Password ON THE Client site
    // step-4: verify email & password

    if (email == 'baapka@beta.com' && password == 'maaKiPari') {
        console.log('Valid');
        window.location.href = 'bank.html';
        // or, location.href = 'bank.html';
    }
    else {
        console.log('Invalid');
        alert('Invali email or User password');
    }

})