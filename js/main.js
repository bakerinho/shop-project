// sets theme
window.addEventListener('load', () => {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark')
  }

  const setTheme = localStorage.getItem('theme')

  if(setTheme == "light"){
    document.body.classList = "light"
    document.querySelector('.theme-toggle').textContent = "Change theme to: dark"
  } else {
    document.body.classList = "dark"
    document.querySelector('.theme-toggle').textContent = "Change theme to: light"
  }
})

// dark/light mode toggle
const themeToggle = document.querySelector('.theme-toggle')

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light')

    if (document.body.classList.contains('light')) {
      themeToggle.textContent = "Change theme to: dark"
      localStorage.setItem('theme', 'light')
    } else {
      themeToggle.textContent = "Change theme to: light"
      localStorage.setItem('theme', 'dark')
    }
})

// menu toggle
const menuToggle = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const contentContainer = document.querySelector('.content-container')

menuToggle.addEventListener('click', () => {
  const isOpen = menu.getAttribute("aria-expanded") == 'true'
  setMenuState(!isOpen)
  console.log(isOpen)
})


function setMenuState(isOpen){
  menu.setAttribute("aria-expanded", String(isOpen))
  contentContainer.style.filter = isOpen ? 'blur(10px)' : 'none';
  contentContainer.style.transition = 'filter 0.25s ease';
}

// cart toggle
const cartToggle = document.querySelector('.cart-toggle')
const cartExit = document.querySelector('.cart-exit')
const cart = document.querySelector('.cart')
const container = document.querySelector('.container')

cartToggle.addEventListener('click', () => {
  const isOpen = cart.getAttribute("aria-expanded") == 'true'
  setCartState(!isOpen)
})

cartExit.addEventListener('click', () => {
  setCartState(false)
})

function setCartState(isOpen){
  cart.setAttribute("aria-expanded", String(isOpen))
  container.style.filter = isOpen ? 'brightness(70%)' : 'none';
  container.style.transition = 'filter 0.3s ease-out';
}

// closes menu/cart if clicked somewhere else
document.addEventListener('click', (e) => {
  const isClickInside = (menu.contains(e.target) || menuToggle.contains(e.target) ||  cart.contains(e.target) || cartToggle.contains(e.target));
  if (!isClickInside) {
    setMenuState(false)
    setCartState(false)
  }
})