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
        btn1.value = "";
        // document.getElementById('form-signup').reset();
        
    }
});

       
//         btn1.addEventListener('click', () => {
            
//             if (!fullname.value.trim()) {
//                 alert('Please enter your full name.');
//                 return; 
//             }

//             if (!email.value.trim() ) {
//                 alert('Please enter a valid email.');
//                 return; 
//             }

//             if (!message.value.trim()) {
//                 alert('Please enter your message.');
//                 return; 
//             }
// else 

// { 
//     return true
           
//             alert('Form is valid. Submitting...');
// }
//         });
// let email=document.getElementById('email');
// let fullName=document.getElementById('fullName');
// let mesg=document.getElementById('message');
// let btn1=document.getElementById('btnsub');

//  //Javascript reGex for Email Validation.
//  let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  

//  // Javascript reGex for Name validation
//  let regName = /\d+$/g;     

// btn1.addEventListener('click',()=>{
//     if (fullName == "" || regName(fullName)) {
//         window.alert("Please enter your name properly.");
//         fullName.focus();
//         return false;
//     }
//     if (email == "" || !regEmail(email)) {
//         window.alert("Please enter a valid e-mail address.");
//         email.focus();
//         return false;
//     }
//     else return true;

// })

