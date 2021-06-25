import './sass/main.scss';
// import menuCards from './templates/menu-cards.hbs';
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

function onCheckBoxChange(evt) {
  const checked = refs.switch.checked;

  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);

  if (checked) {
    localStorage.setItem('STORAGE_KEY', Theme.DARK);
  } else {
    localStorage.removeItem('STORAGE_KEY');
    localStorage.setItem('STORAGE_KEY', Theme.LIGHT);
  }
}
const currentTheme = localStorage.getItem('STORAGE_KEY');

if (currentTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}

// Делаем разметку
const cardBox = document.querySelector('.js-menu');

function createGallery(cards) {
  return cards.map(e => menuCards(e)).join('');
}

const cardMarkup = createGallery(elMarkup);
cardBox.insertAdjacentHTML('beforeend', cardMarkup);
