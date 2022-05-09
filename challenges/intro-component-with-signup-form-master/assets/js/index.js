const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const inputs = document.querySelectorAll('.input-ctr__input')
const form = $('.form-ctr__form')


document.addEventListener('DOMContentLoaded', loadListeners)

function loadListeners() {
  form.addEventListener('submit', validateInputs)
}

function validateInputs(e) {
  e.preventDefault()

  inputs.forEach(input => {
    if (input.nextSibling) cleanErrorMessages(input)

    const inputValue = input.value.trim()

    if (inputValue === '') showErrorMessage(
      input.parentNode,
      'cannot be empty',
      input.getAttribute('name')
    )


    if (input.getAttribute('name') === 'Email Address' && inputValue !== '') {
      const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

      cleanErrorMessages(input)

      if (!emailRegExp.test(inputValue)) return showErrorMessage(
        input.parentNode,
        'Looks like this is not an email'
      )

    }
  })
}

function showErrorMessage(element, message, inputType) {
  const errorIcon = $$('img')
  errorIcon.src = './assets/images/icon-error.svg'
  errorIcon.alt = 'icon-error'
  errorIcon.classList.add('input-ctr__error-icon')

  const errorMessage = $$('p')
  errorMessage.textContent = `${inputType ?? ''} ${message}`
  errorMessage.classList.add('input-ctr__error-message')

  element.appendChild(errorIcon)
  element.appendChild(errorMessage)
}

function cleanErrorMessages(element) {
  while (element.nextSibling) element.nextSibling.remove()
}