burger = document.querySelector('.burger');

navbar = document.querySelector('.navbar');
nav_list = document.querySelector('.nav_list');

burger.addEventListener('click', function(){
    nav_list.classList.toggle('nav_list_burger');
    navbar.classList.toggle('nav_burger');
});