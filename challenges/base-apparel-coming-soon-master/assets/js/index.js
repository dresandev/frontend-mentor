const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const form = $('.content__form')
const emailInput = $('.form__email-input')
const submitBtn = $('.form__submit-btn')

form.addEventListener('submit', validateEmail)

function validateEmail(e) {
  e.preventDefault()
  cleanMessages()

  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  if (emailRegExp.test(emailInput.value.trim())) {
    emailInput.value = ''
    return onSuccess()
  }

  emailInput.value = ''
  onError()
}

function onError() {
  emailInput.style.borderColor = 'var(--soft-red)'

  const errorIcon = $$('img')
  errorIcon.src = './assets/images/icon-error.svg'
  errorIcon.alt = 'error-icon'
  errorIcon.classList.add('form__icon-error')

  const errorMessage = $$('p')
  errorMessage.classList.add('form__message-error')
  errorMessage.textContent = 'Please provide a valid email'

  form.appendChild(errorIcon)
  form.appendChild(errorMessage)
}

function onSuccess() {
  emailInput.style.borderColor = '#ce9797a6'

  const successMessage = $$('p')
  successMessage.classList.add('form__message-success')
  successMessage.textContent = 'thank you, your email was sent successfully'
  form.appendChild(successMessage)

  setTimeout(() => $('.form__message-success').remove(), 4000);
}

function cleanMessages() {
  while (submitBtn.nextElementSibling) submitBtn.nextElementSibling.remove()
}