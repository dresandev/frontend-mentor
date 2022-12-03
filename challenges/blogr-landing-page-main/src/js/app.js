const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const hamburgerBtn = $('.nav__menu-btn')
const menu = $('.nav__menu')
const navMenuMain = $('.menu__main')

const mainOptions = $$('.main__opt')
const optDropdown = $$('.opt__dropdown')

const subMenuHeight = []


optDropdown.forEach((dropdown) => {
  subMenuHeight.push(dropdown.clientHeight);
  dropdown.style.height = 0
})


window.onload = () => {

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('nav__menu-btn--open')

    hamburgerBtn.children[0].classList.toggle('menu-btn__line--top-active')
    hamburgerBtn.children[1].classList.toggle('menu-btn__line--middle-active')
    hamburgerBtn.children[2].classList.toggle('menu-btn__line--bottom-active')

    menu.classList.toggle('nav__menu--opened')

    cleanSelectedOptions()

    optDropdown.forEach((dropdown) => {
      if (dropdown.clientHeight > 0) dropdown.style.height = 0
    })
  })

  mainOptions.forEach((option, optionI) => {

    option.addEventListener('click', () => {
      cleanSelectedOptions()

      optDropdown.forEach((dropdown, dropdownI) => {
        if (optionI !== dropdownI) dropdown.style.height = 0
      })

      const dropdownStyle = optDropdown[optionI].style;

      if (dropdownStyle.height === '0px') {
        dropdownStyle.height = `${subMenuHeight[optionI]}px`
        option.classList.add('main__opt--active')
        return
      }

      dropdownStyle.height = 0
    })

  })

}

const cleanSelectedOptions = () => {
  mainOptions.forEach(option => {
    if (option.classList.contains('main__opt--active')) {
      option.classList.remove('main__opt--active')
    }
  })
}