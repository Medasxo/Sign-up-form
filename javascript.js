function checkPassword(){
    passwordValue = document.querySelector("input[name=password]");
    confirmPasswordValue = document.querySelector("input[name=confirmPassword");
    if(passwordValue.value !== confirmPasswordValue.value){
       confirmPasswordValue.setCustomValidity("Password do not match");
    }

}