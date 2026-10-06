let name = document.getElementById('name');
let email = document.getElementById('email');
let phone=document.getElementById('phone')
let password = document.getElementById('password');
let cpassword = document.getElementById('cpassword');

let errore = document.getElementById('errore');
let errorph=document.getElementById('errorph')
let errorp = document.getElementById('errorp');
let errorcp = document.getElementById('errorcp');

let form = document.getElementById('form');

// Email pattern
let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
// Phone number
let telephonepattern=/^[6-9][0-9]{9}$/

// Password:
// At least 1 uppercase
// At least 1 lowercase
// At least 1 number
// At least 1 special character
// Minimum 8 characters
let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*?]).{8,}$/;

function showErr(error, msg) {
    error.innerText = msg;
}

function valid() {

    let isValid = true;

    // Email validation
    if (!emailPattern.test(email.value)) {
        showErr(errore, 'Enter a valid Gmail address');
        isValid = false;
    }else if(localStorage.getItem('email')===email.value){
        showErr(errore,'Email already exists')
        isValid=false;
    }
    else {
        showErr(errore, '');
    }

    // telphone number validation
    if(!telephonepattern.test(phone.value)){
        showErr(errorph,'Enter a valid Phone number');
        isValid = false;
    }else if(localStorage.getItem('phone number')===phone.value){
            showErr(errorph,'Phone number already exists');
            isValid=false;
    }else{
        showErr(errorph,'')
    }

    // Password validation
    if (!passwordPattern.test(password.value)) {
        showErr(
            errorp,
            'Password must contain uppercase, lowercase, number & special symbol (minimum 8 characters)'
        );
        isValid = false;
    } 
    else if(localStorage.getItem('password')===password.value){
        showErr(errorp,'Password already exsists')
        isValid=false;
    }
        else {
        showErr(errorp, '');
    }

    // Confirm password validation
    if (password.value !== cpassword.value) {
        showErr(errorcp, "Passwords don't match");
        isValid = false;
    } else {
        showErr(errorcp, '');
    }

    return isValid;
}

form.addEventListener('submit', function (e) {

    e.preventDefault();

    if (valid()) {

        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('phone number',phone.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('hasAccount','true')

        alert('Account Created successfully ✅');

        window.location.href = './login.html';
    }
});

function showpassword(){
    let password=document.getElementById('password')
    let eye=document.getElementById('eye')
    if (password.type==='password'){
        password.type='text'
        eye.innerHTML='<i class="fa-solid fa-eye"></i>'
    }else{
        password.type='password'
        eye.innerHTML='<i class="fa-solid fa-eye-slash"></i>'
    }
}

function showcpassword(){
    let cpassword=document.getElementById('cpassword')
    let ceye=document.getElementById('ceye')
    if(cpassword.type==='password'){
        cpassword.type='text'
        ceye.innerHTML='<i class="fa-solid fa-eye"></i>'
    }
    else{
        cpassword.type='password'
        ceye.innerHTML='<i class="fa-solid fa-eye-slash"></i>'
    }
}