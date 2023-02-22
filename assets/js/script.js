const navMenu = document.querySelector('header nav ul');
const botaoMenu = document.querySelector('.menu').addEventListener('click',() => {
    if(navMenu.style.display == "flex") {
        navMenu.style.display = "none";
    }else {
        navMenu.style.display = "flex";
    }
});