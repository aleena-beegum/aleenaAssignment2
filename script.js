let email=document.getElementById('email');
let fullname=document.getElementById('fullName');
let mesg=document.getElementById('message');
let btn1=document.getElementById('btnsub');

btn1.addEventListener('click',()=>{
    if(fullname.value == ''){
        alert('enter full name')
    }else if(email.value == ''){
        alert("enter email")
    }
    else{
        alert('sucess')
    }
})