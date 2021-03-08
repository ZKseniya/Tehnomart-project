// Слайдер на главной странице

const sliderItems = document.querySelectorAll('.slider-item');
const sliderControls = document.querySelectorAll('.conrol-item');
const sliderNext = document.querySelector('.btn-next');
const sliderBack = document.querySelector('.btn-back');

sliderControls.forEach(function(control) {
  control.addEventListener('click', function() {
     let id = this.getAttribute('data-tab');
     let slide = document.querySelector('.slider-item[data-tab="'+id+'"]');
     let activeControl = document.querySelector('.conrol-item.active');
     let activeSlide = document.querySelector('.slider-item.active');

     activeControl.classList.remove('active');
     control.classList.add('active');

     activeSlide.classList.remove('active');
     slide.classList.add('active');
  });
});

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

  }
});





