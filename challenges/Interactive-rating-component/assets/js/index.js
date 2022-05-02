const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const scoringOption = $('.scoring-options')
const card = $('.card')
const submitBtn = $('.submit-button')
let previusSelectedOpt
let scoreSelected


window.onload = e => loadListeners()


function loadListeners() {
  scoringOption.addEventListener('click', markAsSelected)
  submitBtn.addEventListener('click', showThankYouState)
}

function markAsSelected(e) {
  if (e.target.classList.contains('option')) {
    scoreSelected = e.target.dataset.value
    if (previusSelectedOpt) {
      previusSelectedOpt.classList.add('opt-hover')
      previusSelectedOpt.classList.remove('selected')
    }
    previusSelectedOpt = e.target
    e.target.classList.add('selected')
    e.target.classList.remove('opt-hover')
  }
}

function showThankYouState(e) {
  if (!scoreSelected) return e.target.blur()
  card.removeChild(card.firstElementChild)
  createThankYouState()
}

function createThankYouState() {
  const main = $$('main')
  main.classList.add('main', 'text-center', 'appear-component')

  const thxIlustration = $$('img')
  thxIlustration.classList.add('illustration-thank-you')
  thxIlustration.src = 'assets/images/illustration-thank-you.svg'
  thxIlustration.alt = 'illustration-thank-you'

  const selectionTxt = $$('p')
  selectionTxt.classList.add('selection-text')
  selectionTxt.textContent = `You selected ${scoreSelected} out of 5`

  const heading = $$('h1')
  heading.classList.add('heading-title')
  heading.textContent = 'Thank you!'

  const helpDialogs = $$('p')
  helpDialogs.classList.add('help-dialogs')
  helpDialogs.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"

  main.appendChild(thxIlustration)
  main.appendChild(selectionTxt)
  main.appendChild(heading)
  main.appendChild(helpDialogs)
  card.appendChild(main)
}