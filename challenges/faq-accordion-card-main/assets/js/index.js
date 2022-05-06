const $ = selector => document.querySelector(selector)

const FAQContainer = $('.card__FAQ-ctr')

FAQContainer.addEventListener('click', focusOneElement)

function focusOneElement(e) {
  const currentFAQ = e.target.parentNode

  for (const FAQ of FAQContainer.children) {
    if (currentFAQ === FAQ) continue

    if (FAQ.attributes.getNamedItem('open')) {
      FAQ.attributes.removeNamedItem('open')
    }
  }
}
