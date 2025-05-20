// json-server --watch data/products.json --port 8888
// npx json-server --watch data/products.json --port 8888

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
      console.log("err: ", err)
      productsContainer.textContent = 'Nie udało się załadować produktów.'
    })

  function renderProducts(products) {
    // get all categories
    const categories = {}

    products.forEach(product => {
      const { category } = product

      // if there is no such category - create one
      if (!categories[category]) {
        // title
        const catTitle = document.createElement('h2')
        catTitle.classList.add('category-name')
        catTitle.textContent = category
        productsContainer.appendChild(catTitle)

        // wrapper for all products
        const catWrapper = document.createElement('div')
        catWrapper.classList.add('category-items')
        productsContainer.appendChild(catWrapper)

        categories[category] = catWrapper
      }

      // card/wrapper for one product
      const card = document.createElement('div')
      card.classList.add('product-card')

      const title = document.createElement('h3')
      title.classList.add('product-name')
      title.textContent = product.name
      card.appendChild(title)

      const price = document.createElement('p')
      price.classList.add('product-price')
      price.textContent = `${product.price} zł`
      card.appendChild(price)

      // add card to correct category
      categories[category].appendChild(card)
    })
  }
}