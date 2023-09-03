const emailField = document.getElementById("email");
const emailFieldError = document.querySelector("#email + span.error");
const countryField = document.getElementById("country");
const countryFieldError = document.querySelector("#country + span.error");
const zipcodeField = document.getElementById("zipcode");
const zipcodeFieldError = document.querySelector("#zipcode + span.error");
const passwordField = document.getElementById("password");
const passwordFieldError = document.querySelector("#password + span.error");
const confirmPasswordField = document.getElementById("c-password");
const confirmPasswordFieldError = document.querySelector("#c-password + span.error");

const formInput = document.getElementById("formInput");

const eventListenersArray = ["input", "focusout"]

eventListenersArray.forEach((event) => {
    emailField.addEventListener(event, (e) => {
        if (emailField.validity.valid) {
            emailFieldError.textContent = "";        
        } else {
            showError("email");
        }
    });

    countryField.addEventListener(event, (e) => {
        if (countryField.validity.valid) {
            countryFieldError.textContent = "";        
        } else {
            showError("country");
        }
    });

    zipcodeField.addEventListener(event, (e) => {
        if (zipcodeField.validity.valid) {
            zipcodeFieldError.textContent = "";        
        } else {
            showError("zipcode");
        }
    });

    passwordField.addEventListener(event, (e) => {
        if (passwordField.validity.valid && (passwordField.value === confirmPasswordField.value)) {
            passwordFieldError.textContent = "";        
            confirmPasswordFieldError.textContent = "";        
        } else {
            showError("password");
        }
    });

    confirmPasswordField.addEventListener(event, (e) => {
        if (confirmPasswordField.validity.valid && (passwordField.value === confirmPasswordField.value)) {
            passwordFieldError.textContent = "";    
            confirmPasswordFieldError.textContent = "";        
        } else {
            showError("confirmPassword");
        }
    });
 })

formInput.addEventListener("submit", (e) => {
    if(formInput.checkValidity){

    }else {
        showError("submit");
}
    
})

function showError(inputElement = "submit") {

    if(inputElement == "email" || inputElement == "submit") {
        if (emailField.validity.valueMissing) {
            emailFieldError.textContent = "You need to enter an email address.";
        } else if (emailField.validity.typeMismatch) {
            emailFieldError.textContent = "Entered value needs to be an email address.";
        } 
    }
        
    if(inputElement == "country" || inputElement == "submit") {
        if (countryField.validity.valueMissing) {
            countryFieldError.textContent = "You need to enter a country.";
        } else if (countryField.validity.typeMismatch) {
            countryFieldError.textContent = "Entered value needs to be a country name.";
        }
    }
    if(inputElement == "zipcode" || inputElement == "submit") {
        if (zipcodeField.validity.valueMissing) {
            zipcodeFieldError.textContent = "You need to enter a zipcode.";
        } else if (zipcodeField.validity.typeMismatch) {
            zipcodeFieldError.textContent = "Entered value needs to be a valid zipcode.";
        }
    }
    if(inputElement == "password" || inputElement == "submit") {
        if (passwordField.validity.valueMissing) {
            passwordFieldError.textContent = "You need to enter a password.";
        } else if (passwordField.validity.typeMismatch) {
            passwordFieldError.textContent = "Entered value needs to match the password conditions.";
        }else if(passwordField.value != confirmPasswordField.value){
            passwordFieldError.textContent = "Password and confirm password must be same";
            confirmPasswordFieldError.textContent = "Password and confirm password must be same";
        }
    }

    if(inputElement == "confirmPassword" || inputElement == "submit") {
        if (confirmPasswordField.validity.valueMissing) {
            confirmPasswordFieldError.textContent = "You need to enter a confirm password.";
        } else if (confirmPasswordField.validity.typeMismatch) {
            confirmPasswordFieldError.textContent = "Entered value needs to match the password";
        } else if(passwordField.value != confirmPasswordField.value){
            passwordFieldError.textContent = "Password and confirm password must be same";
            confirmPasswordFieldError.textContent = "Password and confirm password must be same";
        }
    }

}
