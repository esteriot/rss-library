const menu = document.querySelector('.navigation__list');
const burgerBtn = document.querySelector('.burger');
const bg = document.querySelector('.bg');
bg.classList.add('.bg');

function handleShowBurger() {
  burgerBtn.classList.toggle('burger--active');
  menu.classList.toggle('navigation__list--active');
  document.body.classList.toggle('lock');
  bg.classList.toggle('bg--active');
}

bg.addEventListener('click', () => {
  handleShowBurger();
});

burgerBtn.addEventListener('click', () => {
  handleShowBurger();
});

menu.addEventListener('click', (e) => {
  if (window.innerWidth <= 930) {
    if (e.target.classList.contains('navigation__link')) {
      setTimeout(() => {
        handleShowBurger();
      }, 100);
    }
  }
});
