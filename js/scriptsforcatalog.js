// Окно "Товар добавлен в корзину"

const buttonsBuy = document.querySelectorAll('.btn-buy');
const modalCart = document.querySelector('.modal-complete-cart');
const closeCart = modalCart.querySelector('.modal-close');
const continueShopping = modalCart.querySelector('.modal-btn-buy');

buttonsBuy.forEach(function(button) {
  button.addEventListener('click', function(evt) {
    evt.preventDefault();

    modalCart.classList.add('show');
  });
});

closeCart.addEventListener('click', function(evt) {
 evt.preventDefault();

 modalCart.classList.remove('show');
});

continueShopping.addEventListener('click', function(evt) {
  evt.preventDefault();

  modalCart.classList.remove('show');
 });

// Закрытие формы кнопкой Esc

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains('show')) {
      evt.preventDefault();
      modalCart.classList.remove('show');
    }
  }
});
