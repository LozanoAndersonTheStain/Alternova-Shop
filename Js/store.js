// Cart

const buttonOpen = document.querySelector('#openCart')
const cart = document.querySelector('.cart')
const buttonClose = document.querySelector('#close-cart')

buttonOpen.addEventListener('click', () => {
  cart.classList.toggle('active')
})

buttonClose.addEventListener('click', () => {
  cart.classList.toggle('active')
})
