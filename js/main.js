import { fetchProducts } from './fetchProducts.js'
import { 
  initTheme, 
  initMenuToggle, 
  initCartToggle, 
  initClickOutside 
} from './ui.js'

document.addEventListener('DOMContentLoaded', () => {
  initTheme()
  initMenuToggle()
  initCartToggle()
  initClickOutside()
  fetchProducts()
})