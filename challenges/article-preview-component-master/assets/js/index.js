const $ = selector => document.querySelector(selector)

const shareBtn = $('.author__share-btn')
const tooltip = $('.tooltip')
const iconShare = $('.icon-share')

let tooltipIsVisible = false


window.onload = () => {
  loadListeners()
}


function loadListeners() {
  shareBtn.addEventListener('click', showTooltip)
}

function showTooltip() {
  if (tooltipIsVisible) {
    tooltip.style.display = 'none'
    shareBtn.style.backgroundColor = '#9eafc238'
    iconShare.style.fill = '#6E8098'
    tooltipIsVisible = !tooltipIsVisible
    return
  }

  tooltip.style.display = 'flex'
  shareBtn.style.backgroundColor = '#6C7D97'
  iconShare.style.fill = 'var(--light-grayish-blue)'
  tooltipIsVisible = !tooltipIsVisible
}