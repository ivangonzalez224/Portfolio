const menu_button = document.querySelector(".navBtnMenu");
const mobile_menu = document.querySelector(".nav__mobile_menu");
const nav_menu = document.querySelector(".header_bar");

menu_button.addEventListener("click", ()=>{
   mobile_menu.style.display = "flex";
   nav_menu.style.display = 'none';
});