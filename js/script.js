const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");


//gives or removes the show-mobile-menu to the body
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
})
menuCloseButton.addEventListener("click", () => menuOpenButton.click());