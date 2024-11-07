'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const navElement = document.querySelector('.header__nav');
  const burgerClosedIcon = document.querySelector('.burger-menu__icon--closed');
  const burgerOpenIcon = document.querySelector('.burger-menu__icon--open');
  const burgerMenuList = document.querySelector('.burger-menu__list');

  burgerClosedIcon.addEventListener('click', () => {
    burgerMenuList.classList.add('burger__menu--active');
    burgerClosedIcon.style.display = 'none';
    burgerOpenIcon.style.display = 'block';
  });

  burgerOpenIcon.addEventListener('click', () => {
    burgerMenuList.classList.remove('burger__menu--active');
    burgerClosedIcon.style.display = 'block';
    burgerOpenIcon.style.display = 'none';
  });

  if (navElement && burgerMenuList) {
    const navBottom = navElement
      .getBoundingClientRect().bottom + window.scrollY;

    burgerMenuList.style.top = `${navBottom}px`;
  }
});
