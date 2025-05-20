// Theme
export function initTheme() {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark')
  }
  applyTheme()

  const themeToggleBtn = document.querySelector('.theme-toggle')
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light')
    localStorage.setItem('theme',document.body.classList.contains('light') ? 'light' : 'dark')
    applyTheme()
  })
}

function applyTheme() {
  const theme = localStorage.getItem('theme')
  document.body.classList.toggle('light', theme === 'light')
  document.body.classList.toggle('dark',  theme !== 'light')
  document.querySelector('.theme-toggle').textContent = theme === 'light' ? 
  'Change theme to: dark' : 'Change theme to: light'
}

// Menu
export function initMenuToggle() {
  const btn = document.querySelector('.menu-btn')
  const menu = document.querySelector('.menu')

  btn.addEventListener('click', e => {
    const open = menu.getAttribute('aria-expanded') === 'true'
    setMenuState(!open)
  })
}

function setMenuState(isOpen) {
  const menu = document.querySelector('.menu')
  const content = document.querySelector('.content-container')
  menu.setAttribute('aria-expanded', String(isOpen))
  content.style.transition = 'filter 0.25s ease'
  content.style.filter = isOpen ? 'blur(10px)' : 'none'
}

// Cart
export function initCartToggle() {
  const btn = document.querySelector('.cart-toggle')
  const exit = document.querySelector('.cart-exit')
  const cart = document.querySelector('.cart')

  btn.addEventListener('click', e => {
    e.stopPropagation()
    const open = cart.getAttribute('aria-expanded') === 'true'
    setCartState(!open)
  })

  exit.addEventListener('click', () => setCartState(false))
}

function setCartState(isOpen) {
  const cart = document.querySelector('.cart')
  const bg = document.querySelector('.bg')
  cart.setAttribute('aria-expanded', String(isOpen))
  bg.style.transition = 'filter 0.3s ease-out'
  bg.style.filter = isOpen ? 'brightness(70%)' : 'none'
}

// Close when clicked outside
export function initClickOutside() {
  const menuBtn = document.querySelector('.menu-btn')
  const menu = document.querySelector('.menu')
  const cartBtn = document.querySelector('.cart-toggle')
  const cart = document.querySelector('.cart')

  document.addEventListener('click', e => {
    const insideMenu = menu.contains(e.target) || menuBtn.contains(e.target)
    const insideCart = cart.contains(e.target) || cartBtn.contains(e.target)
    if (!insideMenu) setMenuState(false)
    if (!insideCart) setCartState(false)
  })
}
