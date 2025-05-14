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
  setMenuState(menu, !isOpen)
  console.log(isOpen)
})

document.addEventListener('click', (e) => {
  const isClickInside = menu.contains(e.target) || menuToggle.contains(e.target);
  if (!isClickInside) {
    setMenuState(menu, false);
  }
})

function setMenuState(div, isOpen){
  div.setAttribute("aria-expanded", String(isOpen))
  contentContainer.style.filter = isOpen ? 'blur(10px)' : 'none';
  contentContainer.style.transition = 'filter 0.25s ease';
}

// cart toggle
const cartToggle = document.querySelector('.cart-toggle')

cartToggle.addEventListener('click', () => {

})

