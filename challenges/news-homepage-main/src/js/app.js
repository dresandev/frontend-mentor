const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)


const burgerBtn = $('.nav__burger')
const switchThemeBtn = $('.menu__switch')


window.onload = () => {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('nav__burger--active')
  })

  switchThemeBtn.addEventListener('click', () => {
    switchThemeBtn.classList.toggle('menu__switch--active')
    document.body.classList.toggle('dark-theme')
  })
}