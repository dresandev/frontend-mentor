const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const hamburgerMenu = $('.header__btn')
const menu = $('.header__nav')


document.addEventListener('DOMContentLoaded', e => {
  loadListeners()
})

const loadListeners = () => {
  hamburgerMenu.addEventListener('click', showMenu)
}

const showMenu = e => {
  const isOpen = menu.classList.contains('menu-open')
  isOpen
    ? menu.classList.remove('menu-open')
    : menu.classList.add('menu-open')
}