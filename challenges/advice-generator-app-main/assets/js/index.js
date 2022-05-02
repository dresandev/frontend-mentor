const API_URL = 'https://api.adviceslip.com/advice';

const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const quoteContainer = $('.quote-container')
const changeQuoteBtn = $('.change-quote-btn')


window.onload = () => {
  changeQuoteBtn.addEventListener('click', e => showAdvice())
  showAdvice()
}


const fetchAdvice = async () => await (await fetch(API_URL, { cache: 'no-cache' })).json()

async function showAdvice() {
  cleanHTML(quoteContainer)

  showSpinner()
  const { slip: { id, advice } } = await fetchAdvice()

  const quoteNumber = $$('span')
  const quote = $$('q')

  quoteNumber.classList.add('quote-id')
  quote.classList.add('quote')

  quoteNumber.textContent = `ADVICE #${id}`
  quote.textContent = advice

  quoteContainer.appendChild(quoteNumber)
  quoteContainer.appendChild(quote)

  setTimeout(() => removeSpinner(), 500);
}

function showSpinner() {
  $('.quote-container').remove()
  const spinner = createSpinner()
  $('.main-container').insertBefore(spinner, $('.pattern-divider'))
}

function removeSpinner() {
  $('.spinner-container').remove()
  $('.main-container').insertBefore(quoteContainer, $('.pattern-divider'))
}

function createSpinner() {
  const spinner = $$('div')
  spinner.classList.add('spinner-container')
  spinner.innerHTML = `
  <div class="sk-folding-cube">
    <div class="sk-cube1 sk-cube"></div>
    <div class="sk-cube2 sk-cube"></div>
    <div class="sk-cube4 sk-cube"></div>
    <div class="sk-cube3 sk-cube"></div>
  </div>
  `

  return spinner
}

function cleanHTML(element) {
  while (element.firstChild) element.firstChild.remove()
}