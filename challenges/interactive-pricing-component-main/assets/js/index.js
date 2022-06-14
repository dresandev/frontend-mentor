const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const views = $('.header__page-views');
const pricesAmount = $('.price__amount');
const priceRange = $('.prices__range');
const discountSwitch = $('.monthly-switch__input');

let price = priceRange.value;
const gradientPercentage = {
  '8': 0,
  '12': 30,
  '16': 50,
  '20': 75,
  '24': 100,
}

document.addEventListener('DOMContentLoaded', (e) => {
  priceRange.addEventListener('input', e => {
    price = Number(e.target.value);

    setProgressBackground();

    views.textContent = `${viewsAmount()} VIEWSPAGE`;
    pricesAmount.textContent = applyDiscount();
  })

  discountSwitch.addEventListener('change', e => {
    pricesAmount.textContent = applyDiscount();
  })
})

const applyDiscount = () => {
  return discountSwitch.checked
    ? applyFix(price - (price * 25 / 100))
    : applyFix(price);
}

const applyFix = price => `$${price.toFixed(2)}`;
const viewsAmount = () => `$${price * 1000 * 6.25}`;

const setProgressBackground = () => {
  const percentage = gradientPercentage[priceRange.value];

  priceRange.style.backgroundImage = `linear-gradient(
    to right,
    var(--soft-cyan-full-slider-bar) 0%,
    var(--soft-cyan-full-slider-bar) ${percentage}%,
    var(--light-grayish-blue-empty-slider-bar) ${percentage}%,
    var(--light-grayish-blue-empty-slider-bar) 100%
  )`
}