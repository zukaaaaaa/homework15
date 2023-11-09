var emailField = document.getElementById("email-field")
var emaill = document.getElementById("emaill")
var emailll = document.getElementById("emailll")


function validateEmail(){
    emailll.style.bottom = "45px"
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailll.innerHTML = "Please enter valid email"
        return false;
    }

    emailll.innerHTML = "";
    return true;
}