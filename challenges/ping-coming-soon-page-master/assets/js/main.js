const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const form = $('.main__form')
const formInput = $('.form__input')
const formSubmit = $('.form__submit')

form.addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault()

  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const inputValue = formInput.value.trim()

  if (inputValue === '' || !emailRegExp.test(inputValue)) {
    const errorMessage = $$('p')
    errorMessage.classList.add('form__error-message')

    inputValue === ''
      ? errorMessage.textContent = 'Whoops! It looks like you forgot to add your email'
      : errorMessage.textContent = 'Please provide a valid email address'

    formInput.style.borderColor = 'var(--light-red)'
    form.insertBefore(errorMessage, formSubmit)
    return
  }

  window.location.reload()
}
