const solutionsData = await(await fetch('assets/data/solutions.json')).json()

const $ = selector => document.querySelector(selector)
const $$ = tagName => document.createElement(tagName)

const main = $('.main__container')

solutionsData.forEach(createProjectCard)

function createProjectCard(solution) {
  const solutionName = solution.title.split('-').join(' ')

  const mainCard = $$('div')
  mainCard.classList.add('container__card')

  const cardImg = $$('img')
  cardImg.classList.add('card__img')
  cardImg.src = `./challenges/${solution.title}/screenshots/desktop-preview.png`
  cardImg.alt = solutionName

  const cardName = $$('a')
  cardName.classList.add('card__name')
  cardName.href = `https://javiandres016.github.io/frontend-mentor/challenges/${solution.title}`
  cardName.textContent = solutionName
  cardName.target = '_blank'

  mainCard.appendChild(cardImg)
  mainCard.appendChild(cardName)

  main.appendChild(mainCard)
}
