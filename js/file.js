const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector('.register-link')
const loginLink =document.querySelector(".login-link");
const btnpopup =document.querySelector(".btnlogin-popup");
const iconclose =document.querySelector(".icon-close");


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');

});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');

});

btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');

});

iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');

});