import { fetchProducts } from './products/fetchProducts.js'
import { initCart } from './summary/cart.js'
import { 
  initTheme, 
  initMenuToggle, 
  initCartToggle, 
  initClickOutside,
  submitTransaction
} from './ui.js'

document.addEventListener('DOMContentLoaded', () => {
  initTheme()
  initMenuToggle()
  initCartToggle()
  initClickOutside()
  fetchProducts()
  initCart()
  submitTransaction()
})