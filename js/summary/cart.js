import { initSummary } from "./summary.js"

export function initCart(){
    updateCart()
}

export function addToCart(product) {
    const cart = getCart()
    const item = cart.find(i => i.id === product.id)
    if (item) {
        item.quantity++
    }
    else { 
        cart.push({ ...product, quantity: 1 })
    }
    saveCart(cart)
}

function getCart() {
    const localValue = localStorage.getItem('cart')
    if(localValue == null || localValue == '') return []

    return JSON.parse(localStorage.getItem('cart'))
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart()
}

function updateCart(){
    const cartCount = document.querySelectorAll('.cart-count')
    const cart = getCart()

    let allItems = 0
    cart.forEach(item => {
      allItems += item.quantity
    })

    cartCount.forEach(el => {
        el.textContent = `Koszyk (${allItems})`
    })

    renderCart()
    updateSummary()

    if(document.querySelector('.summary-btn')) {
       initSummary() 
    }
}

function updateSummary() {
    const cart = getCart()
    const totalAmount = document.querySelector('.total-amount')

    let total = 0

    cart.forEach(item => {
        total += item.price * item.quantity
    })

    totalAmount.textContent = `${total} zł`
}

function subtractItem(productId) {
   const cart = getCart()
  const updatedCart = cart
    .map(item => {
      if (item.id === productId) {
        return {
          ...item, quantity: item.quantity - 1
        }
      }
      return item
    }).filter(item => item.quantity > 0)

  saveCart(updatedCart)
}

function removeItem(productId) {
    const cart = getCart()
    const updatedCart = cart.filter(item => item.id !== productId)  // zostawiamy tylko te, których id ≠ productId
    saveCart(updatedCart)
}

function renderCart() {
    const itemsContainer = document.querySelector('.cart-items')
    const cart = getCart()

    while (itemsContainer.firstChild) {
        itemsContainer.removeChild(itemsContainer.firstChild)
    }

    if(cart.length === 0) {
        const msgInfo = document.createElement('p')
        msgInfo.textContent = "Twoj koszyk jest pusty."
        itemsContainer.append(msgInfo)
        return
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart-item')

        const imgContainer = document.createElement('div')
        imgContainer.classList.add('cart-img')
        const img = document.createElement('img')
        img.src = `/img/${item.id}.png`
        img.alt = item.name
        imgContainer.appendChild(img)

        const info = document.createElement('div')
        info.classList.add('cart-item-info')

        // left part - name and quantity selector
        const left = document.createElement('div')
        left.classList.add('cart-info-containter')

        const name = document.createElement('div')
        name.classList.add('cart-item-name')
        name.textContent = item.name

        const quantitySelector = document.createElement('div')
        quantitySelector.classList.add('cart-quantity-selector')

        const btnAdd = document.createElement('button')
        btnAdd.classList.add('item-btn', 'item-add-quantity')
        btnAdd.textContent = '+'
        btnAdd.addEventListener('click', e => {
            e.stopPropagation()
            addToCart({ id: item.id, name: item.name, price: item.price })
        })

        const quantity = document.createElement('a')
        quantity.classList.add('item-quantity')
        quantity.textContent = item.quantity

        const btnSub = document.createElement('button')
        btnSub.classList.add('item-btn', 'item-subtract-quantity')
        btnSub.textContent = '-'
        btnSub.addEventListener('click', e => {
            e.stopPropagation()
            subtractItem(item.id)
        })

        quantitySelector.append(btnAdd, quantity, btnSub)
        left.append(name, quantitySelector)

        // right part: price and remove
        const right = document.createElement('div')
        right.classList.add('cart-item-container')

        const price = document.createElement('div')
        price.classList.add('cart-item-price')
        price.textContent = `${item.quantity * item.price} zł`

        const remove = document.createElement('div')
        remove.textContent = 'Usuń'
        remove.addEventListener('click', e => {
            e.stopPropagation()
            removeItem(item.id)
        })

        right.append(price, remove)

        info.append(left, right)
        cartItem.append(imgContainer, info)
        itemsContainer.append(cartItem)
    })
    const summary = document.createElement('div')
    summary.classList.add('summary-btn')
    summary.textContent = "Podsumowanie"
    itemsContainer.append(summary)
}