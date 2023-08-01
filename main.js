const menu = document.querySelector('.navigation__list');
const burgerBtn = document.querySelector('.burger');

function handleShowBurger() {
  burgerBtn.classList.toggle('burger--active');
  menu.classList.toggle('navigation__list--active');
  // document.body.classList.toggle('lock');
  // shadow.classList.toggle('shadow--active');
}

// shadow.addEventListener('click', () => {
//   handleShowBurger();
// });

burgerBtn.addEventListener('click', () => {
  handleShowBurger();
});

menu.addEventListener('click', (e) => {
  if (window.innerWidth <= 930) {
    if (e.target.classList.contains('header__link')) {
      setTimeout(() => {
        handleShowBurger();
      }, 100);
    }
  }
});
