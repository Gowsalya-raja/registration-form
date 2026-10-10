
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

var submitBtn = document.getElementById("submitBtn");
var successMessage = document.getElementById("successMessage");

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate Name only

nameInput.addEventListener("input", function () {
    if (nameInput.value === "") {
        nameError.innerText = "Name is required";
    } else {
        nameError.innerText = "";
    }

    checkButton();
});

// Validate Email only

emailInput.addEventListener("input", function () {
    if (emailInput.value === "") {
        emailError.innerText = "Email is required";
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.innerText = "Enter a valid email address";
    } else {
        emailError.innerText = "";
    }

    checkButton();
});

// Validate Password only

passwordInput.addEventListener("input", function () {
    if (passwordInput.value === "") {
        passwordError.innerText = "Password is required";
    } else if (passwordInput.value.length < 6) {
        passwordError.innerText =
            "Password must contain at least 6 characters";
    } else {
        passwordError.innerText = "";
    }

    checkButton();
});

// Enable or disable Submit button

function checkButton() {
    var nameValid = nameInput.value !== "";
    var emailValid = emailPattern.test(emailInput.value);
    var passwordValid = passwordInput.value.length >= 6;

    if (nameValid && emailValid && passwordValid) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }

    successMessage.innerText = "";
}

// Submit function

function submitUser() {
    checkButton();

    if (!submitBtn.disabled) {
        successMessage.innerText = "Registration Successful!";
    }
}
