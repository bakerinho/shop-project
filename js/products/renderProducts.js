import { addToCart } from "../summary/cart.js"

export function renderProducts(products) {
    const productsContainer = document.querySelector('.items-container')

    while (productsContainer.firstChild) {
    productsContainer.removeChild(productsContainer.firstChild);
  }
    
    // get all categories
    const categories = {}

    products.forEach(product => {
      const { category } = product

      // if there is no such category - create one
      if (!categories[category]) {
        // title
        const catTitle = document.createElement('p')
        catTitle.classList.add('category-name')
        catTitle.id = category
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

      const imgWrapper = document.createElement('div')
      imgWrapper.classList.add('item-img-wrapper')

      const img = document.createElement('img')
      img.classList.add('item-img')
      img.src = `/img/${product.id}.png`
      img.alt = product.name
      imgWrapper.append(img)

      const name = document.createElement('p')
      name.classList.add('product-name')
      name.textContent = product.name

      const cpu = document.createElement('p')
      cpu.classList.add('product-price')
      cpu.textContent = `Procesor: ${product.processor}`

      const ram = document.createElement('p')
      ram.classList.add('product-price')
      ram.textContent = `RAM: ${product.ram}`

      const rom = document.createElement('p')
      rom.classList.add('product-price')
      rom.textContent = `Pamiec wbudowana: ${product.rom}`

      const price = document.createElement('p')
      price.classList.add('product-price')
      price.textContent = `Cena: ${product.price} zł`

      const addToCartBtn = document.createElement('button')
      addToCartBtn.classList.add('add-to-cart-btn')
      addToCartBtn.textContent = 'Dodaj do koszyka'

      addToCartBtn.addEventListener('click', () => {
        addToCart(product)
      })

      card.append(
        imgWrapper,
        name,
        cpu,
        ram,
        rom,
        price,
        addToCartBtn
      )

      // add card to correct category
      categories[category].appendChild(card)
    }) 
  }