var username = document.querySelector('input[name="username"]');
var email = document.querySelector('[name="email"]');
var password = document.querySelector('[name="password"]');
var confirmPassword = document.querySelector('[name="confirm-password"]');
var form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = "";
}

// validation
function checkIsEmpty(listInput) {
    let isNotError = true;
    listInput.forEach((input, key) => {
        let text = input.value.trim();
        if (text.length == 0) {
            showError(input, `${key} is required!`);
            isNotError = false;
        } 
    });
    return isNotError;
}

function checkEmailSucess(input) {
    let text = input.value.trim();
    if (text.length > 0) {
        const regrexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let isEmail = text.match(regrexEmail);
        if (isEmail) {
            return true;
        } else {
            showError(input, "Email fail format!");
        }
    }
}

function checkLengthValid(input, min, max) {
    let text = input.value.trim();
    if (text.length > max) {
        showError(input, `khong duoc qua ${max} ky tu!`);
        return false;
    }

    if (text.length < min) {
        showError(input, `phai co it nhat ${min} ky tu!`);
        return false;
    }
    return true;
}

function checkMatchConfirmPassword(password, confirmPassword) {
    let passwordText = password.value.trim();
    let corfirmPasswordText = confirmPassword.value.trim();
    if (passwordText !== corfirmPasswordText) {
        showError(confirmPassword, "Not match password!");
        return false;
    }
    return true;
}




form.addEventListener('submit', function (e) {
    e.preventDefault();
    let arrField = [username, email, password, confirmPassword];
    //default set success all field
    arrField.forEach(input => {
        showSuccess(input);
    });

    let isNotEmpty = checkIsEmpty([username, email, password, confirmPassword]);
    let isEmailSuccess = checkEmailSucess(email);
    let isUserNameLengthValid = checkLengthValid(username, 3, 8);
    let isPasswordLengthValid = checkLengthValid(password, 3, 12);
    let isMatchPassword = checkMatchConfirmPassword(password, confirmPassword);

    if (!isNotEmpty || !isEmailSuccess || !isUserNameLengthValid || !isPasswordLengthValid || !isMatchPassword) {
        // do nt any thing
    } else {
        // logic, call API
    }
})

