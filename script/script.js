function _$(item){
    return document.querySelector(item)
}
const amzForm = _$(".amz__form");
const passwordInput = _$(".inputpassword");
const emailInput = _$(".emailinput");
const showAndHidePassword = _$(".amz__show");
const nextBtn = _$(".next-btn");
const inputErrorContainer = _$(".error__container");
const passwordInputError = _$(".second__passworderror-container");
const incorrectPasswordError = _$(".incorrectpassword__error-container");
const firstLogin = _$(".firstlogin__login");
const secondLogin = _$(".secondform__login");
const previousText = _$(".amz__usermail");
const inputEmailNumberError = _$(".email__numbererror-container");
const switchToFirstLogin = _$(".changepage__btn"); 
const signInBtn = _$(".login__btn");

function togglePassword(){
    if(passwordInput.type === "password" ){
        passwordInput.type = "text";
    }
    else{
        passwordInput.type = "password"
    }
}
if(showAndHidePassword ){
    showAndHidePassword.addEventListener("change", togglePassword)
}
if(switchToFirstLogin ){
    switchToFirstLogin.addEventListener("click", ()=>{
        secondLogin.classList.remove("active__page");
        firstLogin.classList.add("active__page");
    });
}
function checkMail(email){
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-z]{2,}$/
    if(emailRegEx.test(email.toLowerCase().trim())){
        return true
    }
    else{
        return false
    }
} 
function checkNumber(number){
    const numberRegEx = /^\+?\d{0,3}[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/ 
    if(numberRegEx.test(number.trim())){
        return true
    }
    else{
        return false
    }
}
function validateUserInput(inputElement,errorContainer,errorClass,errorBorder){
    if(inputElement.value === ""){
        errorContainer.classList.add(errorClass);
        inputElement.classList.add(errorBorder);
        return false
    }
    else{
        errorContainer.classList.remove(errorClass);
        inputElement.classList.remove(errorBorder);
        return true
    }
}
function showErrorMessage(errorElement,errorContainer,errorClass,errorBorder){
    errorContainer.classList.add(errorClass);
    errorElement.classList.add(errorBorder);
}
function claerErrorMessage(errorElement,errorContainer,errorClass,errorBorder){
    errorElement.addEventListener("input", ()=>{
        errorContainer.classList.remove(errorClass);
        errorElement.classList.remove(errorBorder);
    });
}
if(nextBtn){
    nextBtn.addEventListener("click", (e)=>{
        e.preventDefault()
        const inputNotEmpty = validateUserInput(emailInput,inputErrorContainer,"show__errormssg", "error__border-color");
        if(inputNotEmpty){
            const validateEmail = checkMail(emailInput.value.trim());
            const validateNumber = checkNumber(emailInput.value.trim());
            if(validateEmail || validateNumber){
                firstLogin.classList.remove("active__page");
                secondLogin.classList.add("active__page");
                previousText.innerHTML = emailInput.value
            }
            else{
                // alert("invalid email address")
                showErrorMessage(emailInput,inputEmailNumberError,"show__errormssg","error__border-color");
   
            }

        }
    });
}
if(amzForm ){
    amzForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        const password = passwordInput.value;
        const passwordNotEmpty = validateUserInput(passwordInput,passwordInputError, "show__errormssg","error__border-color");
        if(passwordNotEmpty){
            if(password.length < 8){
            showErrorMessage(passwordInput,incorrectPasswordError,"show__errormssg","error__border-color");
            }
            else{
                alert("welcome to the world spamimg...POLO G, FLASH, MOCO 🤣💻💵💲")
            }
        }
    });
}

claerErrorMessage(emailInput,inputErrorContainer,"show__errormssg","error__border-color");
claerErrorMessage(emailInput,inputEmailNumberError,"show__errormssg","error__border-color");
claerErrorMessage(passwordInput,passwordInputError,"show__errormssg","error__border-color");
claerErrorMessage(passwordInput,incorrectPasswordError,"show__errormssg","error__border-color");