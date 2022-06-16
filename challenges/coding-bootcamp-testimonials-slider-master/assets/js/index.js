const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const buttonPrev = $('.controls__button--prev');
const buttonNext = $('.controls__button--next');
const sliderItems = $$('.slider__item');

const slidersLength = sliderItems.length - 1;
let currentSlider = 0;

document.addEventListener('DOMContentLoaded', e => {
  changeSlider()

  buttonPrev.addEventListener('click', e => {
    currentSlider = currentSlider === 0
      ? slidersLength
      : currentSlider - 1

    changeSlider()
  })

  buttonNext.addEventListener('click', e => {
    currentSlider = currentSlider === slidersLength
      ? 0
      : currentSlider + 1

    changeSlider()
  })
})

const changeSlider = () => {
  sliderItems.forEach(sliderItem => sliderItem.classList.add('hidden'))
  sliderItems[currentSlider].classList.remove('hidden')
}