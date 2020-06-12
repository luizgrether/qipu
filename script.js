const menuMobile = document.querySelector('.hamburguer')
const navLinks = document.querySelector('.nav-links')

if (window.innerWidth < 800){
    navLinks.setAttribute('style', 'display: none')
}

menuMobile.addEventListener('click', ()=> {
    navLinks.style.display = navLinks.style.display == "none" ? "block" : "none";
})