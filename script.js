let email=document.getElementById('floatingInput');
let fullname=document.getElementById('defaultForm-name');
let password=document.getElementById('floatingPassword');
let conPassword=document.getElementById('floatingConPassword');
let btn1=document.getElementById('btnsub');

const isEmail = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

btn1.addEventListener('click', () => {
    if (fullname.value.trim() === '') {
        alert('Please enter fullname');
    } 
     else if (email.value.trim() === '') {
        alert('Please enter email');
    } else if (password.value.trim() === '') {
        alert('Please enter password');
    } else if (!isEmail.test(email.value.trim())) {
        alert('Email must be alphanumeric and special character');
    } else if (conPassword.value.trim()==='') {
        alert('Confirm Password');
    } else {
        alert('Success');
        btn1.value = " ";
        // document.getElementById('form-signup').reset();
        
    }
});