const mobileMenuBtn = document.querySelector('.hamburger')
const navigation = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body')

// Mobile Menu

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('is-active')
  mobileMenuBtn.classList.contains('is-active')
    ? (mobileMenuBtn.ariaExpanded = true)
    : (mobileMenuBtn.ariaExpanded = false)
  navigation.classList.toggle('open')
  body.classList.toggle('nav__open')
})

// code for one page sites
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (navigation.classList.contains('open')) {
      navigation.classList.remove('open')
      mobileMenuBtn.ariaExpanded = false
      mobileMenuBtn.classList.remove('is-active')
      body.classList.remove('nav__open')
    }
  })
})