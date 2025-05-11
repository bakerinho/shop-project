// sets max width based on screen width and theme

window.addEventListener('load', () => {
  const el = document.querySelector('.container')
  const width = el.offsetWidth
  el.style.maxWidth = width + 'px'
  el.style.width = '100%'

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

// cart toggle

const cartToggle = document.querySelector('.cart-toggle')

cartToggle.addEventListener('click', () => {

})

