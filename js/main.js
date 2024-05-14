// бургер
let burger = document.getElementById('burger');
let nav = document.getElementById('nav')

burger.addEventListener('click', function() {
  nav.classList.toggle('nav--active')
  burger.classList.toggle('btn-burger__line--active')
  document.body.classList.toggle('stop-scroll')
})

console.log('ghbgh')


let call = document.getElementById('call-form');
let modal = document.getElementById('modal');
let closed = document.getElementById('modal-closed')

// закрытие модального окна через крестик
call.addEventListener('click', function() {
  modal.classList.add('modal-parent--active')

})

closed.addEventListener('click', function() {
  modal.classList.remove('modal-parent--active')
})

//Закрытие модального окна через темную область
modal.querySelector('.modal').addEventListener('click', function(e){
  e._isClick = true
})

modal.addEventListener('click', function(e) {
  if(e._isClick === true) return
  modal.classList.remove('modal-parent--active')
})
// Закрытие модального окна через Escape
window.addEventListener('keydown', function(e){
  if(e.key === 'Escape') {
    modal.classList.remove('modal-parent--active')
  }
})


//Свайпер
const swiper = new Swiper('#gallery', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,

  navigation: {
    prevEl: '#gallery-prev',
    nextEl: '#gallery-next'
  }

})
