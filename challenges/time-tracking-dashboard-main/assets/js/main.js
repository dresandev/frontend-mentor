const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const hours = document.querySelectorAll('.content__hours')
const metaData = document.querySelectorAll('.content__meta-data')
const userOptions = $('.user__options')

let dataFilter = 'Weekly'
let timeData;

const fetchData = async () => await (await fetch('/assets/data/data.json')).json()


document.addEventListener('DOMContentLoaded', async () => {
  loadListeners()

  timeData = await fetchData()

  showTimes()
})


function loadListeners() {
  userOptions.addEventListener('click', changeTimeFrame)
}

function changeTimeFrame(e) {
  if (e.target.dataset.timeframe) {
    const optionBtn = document.querySelectorAll('.option__btn')

    for (const btn of optionBtn) {
      btn.classList.remove('active')
    }

    e.target.classList.add('active')

    dataFilter = e.target.dataset.timeframe

    showTimes()
  }
}

function showTimes() {
  switch (dataFilter) {
    case 'Daily':
      {
        for (let i = 0; i < hours.length; i++) {
          const { timeframes: { daily } } = timeData[i]
          const { current, previous } = daily

          hours[i].textContent = `${current}hrs`
          metaData[i].textContent = `Last Day - ${previous}hrs`
        }
        break;
      }

    case 'Weekly':
      {
        for (let i = 0; i < hours.length; i++) {
          const { timeframes: { weekly } } = timeData[i]
          const { current, previous } = weekly

          hours[i].textContent = `${current}hrs`
          metaData[i].textContent = `Last Week - ${previous}hrs`
        }
        break;
      }

    case 'Monthly':
      {
        for (let i = 0; i < hours.length; i++) {
          const { timeframes: { monthly } } = timeData[i]
          const { current, previous } = monthly

          hours[i].textContent = `${current}hrs`
          metaData[i].textContent = `Last Month - ${previous}hrs`
        }
        break;
      }
  }
}