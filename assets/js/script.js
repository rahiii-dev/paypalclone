const listEls = document.querySelectorAll("#menu-nav > ul > li");
const menuEl = document.getElementById("menu");
const menuCloseBtnEl = document.getElementById("menu-close");

// functions
function resetListel() {
    if (menuEl.classList.contains("active")) {
        menuEl.classList.remove("active");    
    }

    listEls.forEach(elem => {
        let elmData = elem.getAttribute("data-menu");
        let contentDataEl = document.querySelector(`#menu [data-menu='${elmData}']`);
        if (contentDataEl) {
            contentDataEl.style.display = "none";
        }
    });
}

// events
listEls.forEach(element => {
    element.addEventListener("mouseover", () => {
        resetListel()

        let elmData = element.getAttribute("data-menu");
        let contentDataEl = document.querySelector(`#menu [data-menu='${elmData}']`);
        if (contentDataEl) {
            contentDataEl.style.display = "flex";
            menuEl.classList.add("active");
        }
    });

});

menuEl.addEventListener("mouseleave", resetListel);
menuCloseBtnEl.addEventListener("click", resetListel);

