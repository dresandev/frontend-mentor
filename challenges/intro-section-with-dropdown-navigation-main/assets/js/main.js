const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const dropdownBtn = document.querySelectorAll('.dropdown__btn')
const dropdownOptions = document.querySelectorAll('.dropdown__options')
const btnIcons = document.querySelectorAll('.btn__icon')

const hamburgerBtn = $('.main__hamburger-btn')
const headerNav = $('.header__nav')
const container = $('.container')
const closeMenuBtn = $('.nav__close-btn')

window.onload = e => {
  dropdownBtn.forEach(el => el.addEventListener('click', showMenu))
  hamburgerBtn.addEventListener('click', e => {
    container.classList.add('container-open')
    headerNav.classList.add('nav-open')
  })

  closeMenuBtn.addEventListener('click', e => {
    container.classList.remove('container-open')
    headerNav.classList.remove('nav-open')
  })
}

function showMenu({ target }) {
  if (!target.classList.contains('dropdown__btn')) return

  const dropdownOption = target.nextElementSibling
  const btnIcon = target.firstElementChild

  if (dropdownOption.classList.contains('dropdown-open')) {
    btnIcon.classList.remove('rotate-arrow')
    return dropdownOption.classList.remove('dropdown-open')
  }

  dropdownOptions.forEach((e, i) => {
    e.classList.remove('dropdown-open')
    btnIcons[i].classList.remove('rotate-arrow')
  })

  btnIcon.classList.add('rotate-arrow')
  dropdownOption.classList.add('dropdown-open')
}
