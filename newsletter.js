const form = document.getElementById("register");
const nameField = document.getElementById("name--customer");
const emailField = document.getElementById("email");
const errorContainer = document.getElementById("error-message");
const error01 = document.getElementById("error01");
const error02 = document.getElementById("error02");

const icon = '<span aria-hidden="true" class="fas fa-exclamation-triangle"></span><span class="visually-hidden">Error</span> ';

form.setAttribute("novalidate", true);

function clearErrors() {
let errors = document.getElementById("errors");
if (errors) {
errors.remove();
}
error01.innerHTML = "";
error02.innerHTML = "";

nameField.removeAttribute("aria-invalid");
emailField.removeAttribute("aria-invalid");

}

function validateForm() {
    clearErrors();
    let hasErrors = false;
    let errors = document.createElement("ul");
    errors.id = "errors";
    if (nameField.value === "") {
        const error = document.createElement("li");
        error.innerHTML = "<a href=\"#name\">Your name</a> is required.";
        errors.appendChild(error);
        nameField.setAttribute("aria-invalid", "true");
        error01.innerHTML = `${icon} Enter your name.`;
        hasErrors = true;
    }
    if (emailField.value === "") {
        const error = document.createElement("li");
        error.innerHTML = "<a href=\"#email\">Your email</a> is required.";
        errors.appendChild(error);
        emailField.setAttribute("aria-invalid", "true");
        error2.innerHTML = `${icon} Enter your email.`;
        hasErrors = true;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailField.value)) {
        const error = document.createElement("li");
        error.innerHTML = "<a href=\"#email\">Your email</a> address is not formatted correctly.";
        errors.appendChild(error);
        emailField.setAttribute("aria-invalid", "true");
        error2.innerHTML = `${icon} Email format is <em>address@domain.com</em>.`;
        hasErrors = true;
    }
    
    if (hasErrors) {
        errorContainer.classList.add("errors");
        if(!errorContainer.querySelector("h2")) {
            const errorHeading = document.createElement("h2");
            errorHeading.innerHTML = "Fix these errors to continue:";
            errorContainer.appendChild(errorHeading);
        }
        errorContainer.appendChild(errors);
        errorContainer.focus();
        return false;
    }
    return true;
}

form.addEventListener("submit", function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});

