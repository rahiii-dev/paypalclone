const mobileTogglerEl = document.getElementById("menu-btn");
const menuCloseEl = document.getElementById("menu-close");
const menuNavEl = document.getElementById("menu-nav");

mobileTogglerEl.addEventListener('click', navbarToggle);
menuCloseEl.addEventListener('click', navbarToggle);

function navbarToggle(){
    menuNavEl.classList.toggle("active");

    if(menuNavEl.classList.contains('active')){
        menuNavEl.style.left = 0;
    }
    else {
        menuNavEl.style.left = `${-100}%`;
    }
}