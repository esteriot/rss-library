/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

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
const profileClose = document.querySelector('.profile__close');
const userProfile = document.querySelector('.profile');
const userProfileLink = document.querySelector('.modal-profile__mypfofile');
const userProfileBtn = document.querySelector('.button--profile');

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

userProfileBtn.addEventListener('click', () => {
  openModal(userProfile);
});

userProfileLink.addEventListener('click', () => {
  openModal(userProfile);
});

profileClose.addEventListener('click', () => {
  closeModal(userProfile);
});

closeRegisterForm.addEventListener('click', () => {
  closeModal(registerForm);
  document.forms.register.reset();
});

closeLoginForm.addEventListener('click', () => {
  closeModal(loginForm);
  document.forms.login.reset();
});
