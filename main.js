import * as burger from './js/burger';
import * as slider from './js/slider';
import * as tabs from './js/tabs';
import * as modals from './js/modal';

const profileBtn = document.querySelector('.header__profile-icon');
const modal = document.querySelector('.modal');
const profile = document.querySelector('.modal-profile');
const logOutBtn = document.querySelector('.modal-profile__logout');
const regForm = document.forms.register;
const loginForm = document.forms.login;

let userFirstName;
let userLastName;
let userEmail;
let userPassword;
let isLoggedIn = false;

function validateEmail(email) {
  let testResult;
  const regex = /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+$/;
  testResult = regex.test(email);
  return testResult;
}

function validatePassword(password) {
  let testResult;
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.{6,12}$)/;
  testResult = regex.test(password);
  return testResult;
}

function isLogged() {
  isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  if (isLoggedIn) {
    userFirstName = localStorage.getItem('firstName');
    userLastName = localStorage.getItem('lastName');
    profile.children[1].style.display = 'none';
    profile.children[2].style.display = 'none';
    profile.children[3].style.display = 'inline-block';
    profile.children[4].style.display = 'inline-block';
    profileBtn.textContent = userFirstName.at(0) + userLastName.at(0);
    profileBtn.classList.add('header__profile-icon--logged');
  } else {
    profile.children[1].style.display = 'inline-block';
    profile.children[2].style.display = 'inline-block';
    profile.children[3].style.display = 'none';
    profile.children[4].style.display = 'none';
    profileBtn.classList.remove('header__profile-icon--logged');
    profileBtn.innerHTML = `<svg class="profile-icon" width="28" height="28"
              viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM18.6667 7.77778C18.6667 10.3551 16.5774 12.4444 14.0001 12.4444C11.4227 12.4444 9.33339 10.3551 9.33339 7.77778C9.33339 5.20045 11.4227 3.11111 14.0001 3.11111C16.5774 3.11111 18.6667 5.20045 18.6667 7.77778ZM19.4998 16.2781C20.9584 17.7367 21.7778 19.715 21.7778 21.7778H14L6.22225 21.7778C6.22225 19.715 7.0417 17.7367 8.50031 16.2781C9.95893 14.8194 11.9372 14 14 14C16.0628 14 18.0411 14.8194 19.4998 16.2781Z"
                fill="white" />
            </svg>`;
  }
}

regForm.addEventListener('submit', (e) => {
  userFirstName = regForm.elements.firstName.value;
  userLastName = regForm.elements.lastName.value;
  userEmail = regForm.elements.email.value;
  userPassword = regForm.elements.password.value;

  const res =
    userFirstName.length > 0 &&
    userLastName.length > 0 &&
    validateEmail(userEmail) &&
    validatePassword(userPassword);

  if (res) {
    e.preventDefault();
    regForm.reset();
    isLoggedIn = true;
    modal.classList.remove('modal__active');
    document.body.classList.toggle('lock');
    localStorage.setItem('firstName', userFirstName);
    localStorage.setItem('lastName', userLastName);
    localStorage.setItem('email', userEmail);
    localStorage.setItem('password', userPassword);
    localStorage.setItem('isLoggedIn', isLoggedIn);
    alert('Registration completed successfully');
    isLogged();
  }
});

logOutBtn.addEventListener('click', () => {
  isLoggedIn = false;
  localStorage.setItem('isLoggedIn', isLoggedIn);
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  profile.classList.remove('modal-profile--active');
  isLogged();
});

isLogged();
