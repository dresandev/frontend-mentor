const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const inputs = document.querySelectorAll('.form__input')
const totalAmounts = document.querySelectorAll('.total__amount')
const btnReset = $('.results__reset-btn')
const form = $('.calculator__form')
const tipPercentages = $('.form__tip')

const data = {
  bill: 0,
  percentage: 0,
  people: 1
}

let tipAmount = 0
let total = 0


document.addEventListener('DOMContentLoaded', loadListeners)

function loadListeners(e) {
  btnReset.addEventListener('click', resetForm)
  tipPercentages.addEventListener('click', setPercentageByBtn)
  inputs[0].addEventListener('input', setValue)
  inputs[1].addEventListener('input', setValue)
  inputs[2].addEventListener('input', setValue)
}

const resetForm = e => {
  form.reset()
  totalAmounts[0].textContent = `$00.00`
  totalAmounts[1].textContent = `$00.00`
  data.bill = 0
  data.percentage = 0
  data.people = 1
}

const setValue = ({ target }) => {
  const errorElement = target.parentNode.children[0]

  if (target.value === '0') {
    return errorElement.style.display = 'block'
  }

  if (errorElement.style.display === 'block') {
    errorElement.style.display = 'none'
  }

  if (target.value !== '') {
    data[target.id] = Number(target.value)
    calculate()
    showAmounts()
  }
}

const setPercentageByBtn = ({ target }) => {
  const tipPercentages = document.querySelectorAll('.tip__percentage')
  tipPercentages.forEach(p => p.classList.remove('active'))

  if (target.classList.contains('tip__percentage')) {
    data.percentage = Number(target.dataset.percentage)
    target.classList.add('active')
    calculate()
    showAmounts()
  }
}

const calculate = () => {
  const { bill, percentage, people } = data

  tipAmount = ((bill * percentage) / 100) / people
  total = (bill / people) + tipAmount
}

const showAmounts = () => {
  totalAmounts[0].textContent = `$${tipAmount.toFixed(2)}`
  totalAmounts[1].textContent = `$${total.toFixed(2)}`
}