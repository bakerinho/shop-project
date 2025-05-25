// json-server --watch data/products.json --port 8888
// npx json-server --watch data/products.json --port 8888

import { renderProducts } from "./renderProducts.js"

export function fetchProducts() {
  const productsContainer = document.querySelector('.items-container')
  productsContainer.textContent = 'Ładowanie...'

  fetch('http://localhost:8888/products')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
    })
    .then(renderProducts)
    .catch(err => {
      console.log("err: ", err)
      productsContainer.textContent = 'Nie udało się załadować produktów.'
    })
}