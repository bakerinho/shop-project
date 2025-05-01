// toggle dark/light mode

const themeToggle = document.querySelector('.theme-toggle')

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
})

// cart toggle

const cartToggle = document.querySelector('.cart-toggle')

cartToggle.addEventListener('click', () => {
  
})