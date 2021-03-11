// Слайдер на главной странице

const sliderItems = Array.from(document.querySelectorAll('.slider-item'));
const sliderControls = Array.from(document.querySelectorAll('.contxxxxxxxxxxxxxxxxxxxxxxxxxxxxrol-item'));
const sliderButtons = document.querySelector('.promo-slider');
const sliderNext = document.querySelector('.btn-next');
const sliderBack = document.querySelector('.btn-back');

sliderButtons.onclick = function (event) {

  let target = event.target;
  let activeSlide = sliderItems.find(item => item.classList.contains('active'));
  let activeControl = sliderControls.find(item => item.classList.contains('active'));
  let nextSlide;
  let nextControl;
  let indexNextSlide;
  let indexNextControl;

  function toggleClassActive () {
    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');

    activeControl.classList.remove('active');
    nextControl.classList.add('active');
  };

  if (target.tagName != 'BUTTON') return;

  if (target.classList.contains('btn-next')) {
    indexNextSlide = sliderItems.indexOf(activeSlide) + 1;
    indexNextControl = sliderControls.indexOf(activeControl) + 1;
    nextSlide =  sliderItems[indexNextSlide];
    nextControl = sliderControls[indexNextControl];

    sliderBack.disabled = false;

    if (indexNextSlide <= sliderItems.length - 1) {

      toggleClassActive();
    }

    if (indexNextSlide == sliderItems.length - 1) {
      sliderNext.disabled = true;
    }
  }

  if (target.classList.contains('btn-back')) {
    indexNextSlide = sliderItems.indexOf(activeSlide) - 1;
    indexNextControl = sliderControls.indexOf(activeControl) - 1;
    nextSlide =  sliderItems[indexNextSlide];
    nextControl = sliderControls[indexNextControl];

    sliderNext.disabled = false;

    if (indexNextSlide >= 0) {

      toggleClassActive();

    }

      if (indexNextSlide == 0) {
        sliderBack.disabled = true;
      }
  }

  if (target.classList.contains('control-item')) {
    let id = target.getAttribute('data-tab');
    nextControl = document.querySelector('.control-item[data-tab="'+id+'"]');
    nextSlide = document.querySelector('.slider-item[data-tab="'+id+'"]');

    toggleClassActive();
  }
}


// Табы в секции сервисов

const servicesButtons = document.querySelectorAll('.btn-services');
const servicesDescriptions = document.querySelectorAll('.services-desc');

  servicesButtons.forEach(function(button) {
   button.addEventListener('click', function() {
      let id = this.getAttribute('data-tab');
      let content = document.querySelector('.services-desc[data-tab="'+id+'"]');
      let activeButton = document.querySelector('.btn-services.active');
      let activeContent = document.querySelector('.services-desc.active');

      activeButton.classList.remove('active');
      button.classList.add('active');

      activeContent.classList.remove('active');
      content.classList.add('active');
   });
});

// Открытие карты

const mapLink = document.querySelector('.map-link');
const modalMap = document.querySelector('.modal-map');
const closeMap = modalMap.querySelector('.modal-close');

  mapLink.addEventListener('click', function(evt) {
    evt.preventDefault();

    modalMap.classList.add('show');

  closeMap.addEventListener('click', function(evt) {
    evt.preventDefault();

    modalMap.classList.remove('show');
  });
});

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

// Открытие формы обратной связи

const feedbackLink = document.querySelector('.btn-feedback');
const modalUser = document.querySelector('.modal-user');
const closeUser = modalUser.querySelector('.modal-close');
const userName = modalUser.querySelector('.user-name');
const userEmail = modalUser.querySelector('.user-mail');
const userText = modalUser.querySelector('.user-text');
const userForm = modalUser.querySelector('.user-form');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener('click', function(evt) {
  evt.preventDefault();
 modalUser.classList.add('show');

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  };

});

closeUser.addEventListener('click', function(evt) {
  evt.preventDefault();

  modalUser.classList.remove('show');
  modalUser.classList.remove("modal-error");
});

// Валидация формы

userForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    modalUser.classList.remove("modal-error");
    modalUser.offsetWidth = modalUser.offsetWidth;
    modalUser.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
    };
  };

});

// Закрытие формы кнопкой Esc

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalUser.classList.contains("show")) {
      evt.preventDefault();
      modalUser.classList.remove("show");
      modalUser.classList.remove("modal-error");
    }
    if (modalMap.classList.contains("show")) {
      evt.preventDefault();
      modalMap.classList.remove("show");
    }
    if (modalCart.classList.contains("show")) {
      evt.preventDefault();
      modalCart.classList.remove("show");
    }
  }
});





