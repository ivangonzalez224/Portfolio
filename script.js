const menuButton = document.querySelector('.navBtnMenu');
const mobileMenu = document.querySelector('.nav__mobile_menu');
const navMenu = document.querySelector('.header_bar');
const mobileMenuOptions = document.querySelectorAll('.nav_btn_list');
const navBtnMobileClosed = document.querySelector('.nav__btn_mobile_closed');

menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  navMenu.style.display = 'none';
});

for (let i = 0; i < mobileMenuOptions.length; i += 1) {
  mobileMenuOptions[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    navMenu.style.display = 'block';
  });
}

navBtnMobileClosed.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  navMenu.style.display = 'block';
});
