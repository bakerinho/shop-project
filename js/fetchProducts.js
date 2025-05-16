export function fetchProducts() {
  const productsContainer = document.querySelector('.items-container')

  fetch('http://localhost:8888/products')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Błąd sieci: ${response.status}`)
      }
      return response.json()
    })
    .then(renderProducts)
    .catch(err => {
      console.error('Error: ', err)
      productsContainer.textContent = 'Nie udało się załadować produktów.'
    })

  function renderProducts(products) {
    // removes all content if exist
    while (productsContainer.firstChild) {
        productsContainer.removeChild(productsContainer.firstChild)
    }
    
    products.forEach(product => {
      // card wrapper
      const card = document.createElement('div')
      card.classList.add('product-card')

      // title
      const title = document.createElement('h3')
      title.classList.add('product-name')
      title.textContent = product.name
      card.appendChild(title)

      // price
      const price = document.createElement('p')
      price.classList.add('product-price')
      price.textContent = `${product.price} zł`
      card.appendChild(price)

      productsContainer.appendChild(card)
    })
  }
}
