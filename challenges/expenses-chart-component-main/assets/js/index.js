const createElement = tagName => document.createElement(tagName)
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const spendingGraphic = $('.spending__graphic')

let highestBar = null
const maxHeight = 170


document.addEventListener('DOMContentLoaded', async () => {
  const expensesPerDay = await fetchData()
  expensesPerDay.forEach(({ day, amount }) => createBar(day, amount))

  setHighestBarBgcColor()
})

const createBar = (day, amount) => {
  const height = Math.round((maxHeight * amount / 100) * 1.8)

  const itemAmount = createElement('div')
  itemAmount.classList.add('bar__amount')
  itemAmount.innerHTML = `$${amount}`

  const graphicItem = createElement('div')
  graphicItem.classList.add('graphic__item')

  const bar = createElement('div')
  bar.classList.add('item__bar')
  bar.style.height = `${height}px`

  const dayParagraph = createElement('p')
  dayParagraph.classList.add('item__day')
  dayParagraph.textContent = day

  bar.appendChild(itemAmount)
  graphicItem.appendChild(bar)
  graphicItem.appendChild(dayParagraph)
  spendingGraphic.appendChild(graphicItem)
}

const setHighestBarBgcColor = () => {
  const bars = $$('.item__bar')

  bars.forEach(bar => {
    if (!highestBar) highestBar = bar

    const barHeight = Number(bar.style.height.replace('px', ''))
    const highestBarHeight = Number(highestBar.style.height.replace('px', ''))

    if (barHeight > highestBarHeight) highestBar = bar
  })

  highestBar.classList.add('item__bar--highest')
}

const fetchData = async () => {
  const response = await fetch('./assets/data/data.json')
  const data = await response.json()
  return data
}
