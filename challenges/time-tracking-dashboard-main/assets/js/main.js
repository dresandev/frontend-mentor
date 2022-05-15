const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const URL = window.location.protocol.includes('http:')
  ? '/assets/data/data.json'
  : '/frontend-mentor/challenges/time-tracking-dashboard-main/assets/data/data.json'

const hours = document.querySelectorAll('.content__hours')
const metaData = document.querySelectorAll('.content__meta-data')
const userOptions = $('.user__options')

const hoursLength = hours.length
let dataFilter = 'Weekly'
let timeData;

const fetchData = async () => await (await fetch(URL)).json()

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

    for (const btn of optionBtn) btn.classList.remove('active')

    e.target.classList.add('active')

    dataFilter = e.target.dataset.timeframe

    showTimes()
  }
}

async function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function startTransition() {
  for (let i = 0; i < hours.length; i++) {
    hours[i].style.opacity = 0
    metaData[i].style.opacity = 0
  }
  await wait(300)
}

async function endTransition() {
  for (let i = 0; i < hours.length; i++) {
    hours[i].style.opacity = 1
    metaData[i].style.opacity = 1
  }
}

function setTimeFrame(timeFrame, lastPeriod) {

  for (let i = 0; i < hoursLength; i++) {
    const { timeframes } = timeData[i]
    const { current, previous } = timeframes[timeFrame]

    hours[i].textContent = `${current}hrs`
    metaData[i].textContent = `${lastPeriod} - ${previous}hrs`
  }
}

async function showTimes() {

  switch (dataFilter) {
    case 'Daily':
      await startTransition()
      setTimeFrame('daily', 'Yesterday')
      endTransition()
      break;

    case 'Weekly':
      await startTransition()
      setTimeFrame('weekly', 'Last Week')
      endTransition()
      break;

    case 'Monthly':
      await startTransition()
      setTimeFrame('monthly', 'Last Month')
      endTransition()
      break;
  }
}