import * as burger from './js/burger';
import * as slider from './js/slider';

const radioButtons = document.querySelectorAll('.favorites__form-input');
const books = document.querySelectorAll('.booklist-item');
const labels = document.querySelectorAll('.favorites__form-label');
const container = document.querySelector('.booklist');

function showSeason(season) {
  container.style.height = `${container.clientHeight}px`;

  for (let j = 0; j < books.length; j += 1) {
    if (books[j].classList.contains(`booklist-item--${season}`)) {
      setTimeout(() => {
        books[j].style.display = 'block';
        setTimeout(() => {
          books[j].style.opacity = 1;
        }, 50);
      }, 300);
    } else {
      books[j].style.opacity = 0;
      setTimeout(() => {
        books[j].style.display = 'none';
      }, 300);
    }
  }

  setTimeout(() => {
    container.style.height = 'auto';
  }, 400);
}

for (let i = 0; i < radioButtons.length; i += 1) {
  radioButtons[i].addEventListener('click', (e) => {
    showSeason(e.target.value);
    labels.forEach((label) => {
      label.classList.remove('favorites__form-label--active');
    });
    e.target.parentNode.classList.add('favorites__form-label--active');
  });
}

// modal

const signUpBtn = document.querySelector('.button--register');
const logInBtn = document.querySelector('.button--login');
const profileIcon = document.querySelector('.header__profile-icon');
const profileModal = document.querySelector('.modal-profile');
const modal = document.querySelector('.modal');
const register = document.querySelector('.modal-profile__register');
const registerForm = document.querySelector('.register-form');
const login = document.querySelector('.modal-profile__login');
const loginForm = document.querySelector('.login-form');
const closeRegisterForm = document.querySelector('.modal-form__close-register');
const closeLoginForm = document.querySelector('.modal-form__close-login');

function openModal(target) {
  modal.classList.add('modal__active');
  target.style.display = 'flex';
  document.body.classList.toggle('lock');
  profileModal.classList.remove('modal-profile--active');
  profileModal.classList.remove('bounce-top');
}

function closeModal(target) {
  modal.classList.remove('modal__active');
  target.style.display = 'none';
  document.body.classList.toggle('lock');
}

profileIcon.addEventListener('click', () => {
  profileModal.classList.toggle('modal-profile--active');
  profileModal.classList.toggle('bounce-top');
});

register.addEventListener('click', () => {
  openModal(registerForm);
});

signUpBtn.addEventListener('click', () => {
  openModal(registerForm);
});

login.addEventListener('click', () => {
  openModal(loginForm);
});

logInBtn.addEventListener('click', () => {
  openModal(loginForm);
});

closeRegisterForm.addEventListener('click', () => {
  closeModal(registerForm);
});

closeLoginForm.addEventListener('click', () => {
  closeModal(loginForm);
});
