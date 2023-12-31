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
