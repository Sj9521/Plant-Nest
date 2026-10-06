let email = document.getElementById('email');
let password = document.getElementById('password');

let errore = document.getElementById('errore');
let errorp = document.getElementById('errorp');

let form = document.getElementById('loginForm');
let title=document.getElementById('title')

function showErr(error, msg) {
    error.innerText = msg;
}

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let enterEmail = email.value.trim();
    let enterPassword = password.value.trim();

    // Get stored account details
    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

    // Email validation
    if (enterEmail === '') {
        showErr(errore, 'Email is required');
        return;
    } else {
        showErr(errore, '');
    }

    // Password validation
    if (enterPassword === '') {
        showErr(errorp, 'Password is required');
        return;
    } else {
        showErr(errorp, '');
    }

    // Check whether account exists
    if (storedEmail === null || storedPassword === null) {
        alert('No account found. Please create an account.');
        return;
    }

    // Check login details
    if (enterEmail === storedEmail && enterPassword === storedPassword) {

        showErr(errore, '');
        showErr(errorp, '');

        localStorage.setItem('isLoggedIn','true')
        alert('Login successful ✅');

        // Change this to your actual next page
        window.location.href = './home.html';

    } else {

        showErr(errore, 'Invalid email ');
        showErr(errorp,'Invalid password')

    }

});

function showpassword(){
    let password=document.getElementById('password')
    let eye=document.getElementById('eye')

    if(password.type==='password'){
        password.type='text'
        eye.innerHTML='<i class="fa-solid fa-eye"></i>'
    }
    else{
        password.type='password'
        eye.innerHTML='<i class="fa-solid fa-eye-slash"></i>'
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('hasAccount')==='true'){
        title.innerHTML='Welcome Back to <br> PlantNest'
    }
})

function goBack() {
    if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
        history.back();
    } 
    else {
        window.location.href = "../html/home.html";
        }
    }