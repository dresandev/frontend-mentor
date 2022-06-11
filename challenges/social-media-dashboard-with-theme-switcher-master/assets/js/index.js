const $ = selector => document.querySelector(selector);

const switchToggle = $('.toggle__input');

document.addEventListener('DOMContentLoaded', () => {
  switchToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
  })
});