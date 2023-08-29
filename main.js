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

// slider

const sliderImages = document.querySelectorAll('.carousel__image');
const sliderDots = document.querySelectorAll('.carousel__pagination-item');
const imgContainer = document.querySelector('.carousel__image-container');
const prevBtn = document.querySelector('.carousel_button--prev');
const nextBtn = document.querySelector('.carousel_button--next');

let sliderCount = 0;
let sliderWidth;

function handleButtonsClick() {
  imgContainer.classList.add('transition-on');
  sliderDots.forEach((dot) => {
    dot.children[0].classList.remove('carousel__pagination-icon--active');
  });
  sliderWidth = sliderImages[sliderCount].clientWidth;
  let shiftX;
  if (window.innerWidth <= 768) {
    const gap = imgContainer.clientWidth - sliderWidth;
    shiftX = sliderWidth * sliderCount + (gap + 25) * sliderCount;
  } else {
    const gap = 25;
    shiftX = sliderWidth * sliderCount + gap * sliderCount;
  }
  imgContainer.style.transform = `translateX(-${shiftX}px)`;
  sliderDots[sliderCount].children[0].classList.add(
    'carousel__pagination-icon--active'
  );
}

nextBtn.addEventListener('click', () => {
  sliderCount += 1;
  if (sliderCount === sliderImages.length) {
    sliderCount = 0;
  }
  handleButtonsClick();
});

prevBtn.addEventListener('click', () => {
  sliderCount -= 1;
  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1;
  }
  handleButtonsClick();
});

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    imgContainer.classList.add('transition-on');
    sliderDots.forEach((dot) => {
      dot.children[0].classList.remove('carousel__pagination-icon--active');
    });
    sliderCount = index;
    sliderWidth = sliderImages[sliderCount].clientWidth;
    let shiftX;
    if (window.innerWidth <= 768) {
      const gap = imgContainer.clientWidth - sliderWidth;
      shiftX = sliderWidth * sliderCount + (gap + 25) * sliderCount;
    } else {
      const gap = 25;
      shiftX = sliderWidth * sliderCount + gap * sliderCount;
    }
    imgContainer.style.transform = `translateX(-${shiftX}px)`;
    dot.children[0].classList.add('carousel__pagination-icon--active');
  });
});

window.addEventListener('resize', () => {
  imgContainer.classList.remove('transition-on');
  sliderWidth = sliderImages[sliderCount].clientWidth;
  let shiftX;
  if (window.innerWidth <= 768) {
    const gap = imgContainer.clientWidth - sliderWidth;
    shiftX = sliderWidth * sliderCount + (gap + 25) * sliderCount;
    prevBtn.style.top = `${
      (sliderImages[sliderCount].clientHeight / 100) * 45
    }px`;
    nextBtn.style.top = `${
      (sliderImages[sliderCount].clientHeight / 100) * 45
    }px`;
  } else {
    if (sliderCount > 2) {
      sliderDots.forEach((dot) => {
        dot.children[0].classList.remove('carousel__pagination-icon--active');
      });
      sliderDots[2].children[0].classList.add(
        'carousel__pagination-icon--active'
      );
      sliderCount = 2;
    }
    const gap = 25;
    shiftX = sliderWidth * sliderCount + gap * sliderCount;
  }
  imgContainer.style.transform = `translateX(-${shiftX}px)`;
});
