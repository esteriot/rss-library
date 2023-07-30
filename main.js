const menu = document.querySelector('.header__list');
const burgerBtn = document.querySelector('.header__burger');

function handleShowBurger() {
  burgerBtn.classList.toggle('header__burger--active');
  menu.classList.toggle('header__list--active');
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
