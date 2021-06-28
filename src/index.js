import './sass/main.scss';
import menuCards from './templates/menu-cards.hbs';
import elMarkup from './menu.json';

//Меняем тему
const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
refs.switch.addEventListener('change', onCheckBoxChange);
const STORAGE_KEY = 'theme';

const currentTheme = localStorage.getItem('STORAGE_KEY');

if (currentTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
} else {
  currentTheme === Theme.LIGHT;
  refs.body.classList.add(Theme.LIGHT);
  refs.switch.checked = false;
}

function onThemeBodyChange(addClass, delClass) {
  refs.body.classList.remove(delClass);
  refs.body.classList.add(addClass);
  localStorage.setItem('STORAGE_KEY', addClass);
}

function onCheckBoxChange(evt) {
  const checked = refs.switch.checked;
  if (checked) {
    onThemeBodyChange(Theme.DARK, Theme.LIGHT);
  } else {
    onThemeBodyChange(Theme.LIGHT, Theme.DARK);
  }
}

// Делаем разметку
const cardBox = document.querySelector('.js-menu');

function createGallery(cards) {
  return cards.map(menuCards).join('');
}

const cardMarkup = createGallery(elMarkup);
cardBox.insertAdjacentHTML('beforeend', cardMarkup);
