// Registry Form Validation using Regular Expression

// Get elements from the DOM
const userFullName = document.getElementById('user-full-name');
const userPhone = document.getElementById('user-phone');
const userZipCode = document.getElementById('user-zip-code');
const userPassword = document.getElementById('user-password');
const repeatUserPassword = document.getElementById('repeat-password');
const userEmail = document.getElementById('user-email');
const myForm = document.querySelector('form');
const showPassword = document.getElementById('show-password');
const errorsMessageField = document.querySelector('.errors-message');

// Add event Listener
userFullName.addEventListener('keyup', validateFullName);
userPhone.addEventListener('keyup', validatePhone);
userZipCode.addEventListener('keyup', validateZipCode);
userPassword.addEventListener('keyup', validatePassword);
userEmail.addEventListener('keyup', validateEmail);
showPassword.addEventListener('click', showHidePassword);
repeatUserPassword.addEventListener('keyup', comparePasswords);

// Create Validation functions

// Validate Name
function validateFullName() {
    const regEx_FullName = /^[a-zA-Z]{2,20}( )[a-zA-Z]{2,20}(( )[a-zA-Z]{2,20})?$/;

    if (!regEx_FullName.test(userFullName.value)) {
        notValid(userFullName);
        errorsMessageField.innerHTML = `<p>Please enter a valid name, from 2 to 20 characters</p>`;
    } else {
        valid(userFullName);
        errorsMessageField.innerHTML = '';
    }
}

// Validate Phone
function validatePhone() {
    const regEx_Phone = /^[+]\(?\d{3,4}\)?[-. ]?\d{2}[-. ]?\d{3,4}[-. ]?\d{3,4}$/;

    if (!regEx_Phone.test(userPhone.value)) {
        notValid(userPhone);
        errorsMessageField.innerHTML = `<p>Please enter a valid phone, in the format shown</p>`;
    } else {
        valid(userPhone);
        errorsMessageField.innerHTML = '';
    }
}

// Validate Zip code
function validateZipCode() {
    const regEx_ZipCode = /^[0-9]{5}(-[0-9]{4})?$/;

    if (!regEx_ZipCode.test(userZipCode.value)) {
        notValid(userZipCode);
        errorsMessageField.innerHTML = `<p>Please enter a valid zip code, with a maximum of 5 numbers</p>`;
    } else {
        valid(userZipCode);
        errorsMessageField.innerHTML = '';
    }
}

// Validate Password
function validatePassword() {
    const regEx_Password = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\_\=\+\<\>\?\/\.\,\~\-]{8,15}$/;

    if (!regEx_Password.test(userPassword.value)) {
        notValid(userPassword);
        errorsMessageField.innerHTML = `<p>Please enter a valid password, between 8 and 15 characters</p>`;
    } else {
        valid(userPassword);
        errorsMessageField.innerHTML = '';
    }
    comparePasswords();
}

// Validate Email
function validateEmail() {
    const regEx_Email = /^([a-z0-9\_\.\-]+)@([a-z0-9\_\.\-]+)\.([a-z]{2,5})$/;

    if (!regEx_Email.test(userEmail.value)) {
        notValid(userEmail);
        errorsMessageField.innerHTML = `<p>Please enter a valid email, in the format shown</p>`;
    } else {
        valid(userEmail);
        errorsMessageField.innerHTML = '';
    }
}

// Validation functions

// Not Valid
function notValid(input) {
    input.classList.add('not-valid');
    input.classList.remove('valid');
}

// Valid
function valid(input) {
    input.classList.remove('not-valid');
    input.classList.add('valid');
}

// Show - Hide passwords
function showHidePassword() {
    if (userPassword.getAttribute('type') === 'password') {
        userPassword.setAttribute('type', 'text');
        repeatUserPassword.setAttribute('type', 'text');
        showPassword.style.color = 'red';
        showPassword.style.transform = 'scale(1.2)';
        showPassword.style.textDecoration = 'none';
    } else {
        userPassword.setAttribute('type', 'password');
        repeatUserPassword.setAttribute('type', 'password');
        showPassword.style.color = '#26a69a';
        showPassword.style.transform = 'scale(1)';
        showPassword.style.textDecoration = 'line-through';
    }
}

// Compare passwords
function comparePasswords() {
    userPassword.value === repeatUserPassword.value ? valid(repeatUserPassword) : notValid(repeatUserPassword);
}

// Validate Form
function validateForm() {
    const inputs = document.querySelectorAll('form input');

    if (userFullName.classList.contains('valid') && userPhone.classList.contains('valid') && userZipCode.classList.contains('valid') && userPassword.classList.contains('valid') && repeatUserPassword.classList.contains('valid') && userEmail.classList.contains('valid')) {
        myForm.submit();
    }
}

// Submit form
myForm.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
});