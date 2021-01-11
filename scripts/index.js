let openPopupBtn = document.querySelector('.profile__button-edit');

let popup = document.querySelector('.overlay');

let popupExit = popup.querySelector('.popup__exit-btn');

let title = document.querySelector('.profile__title');

let subtitle = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.popup__form');

let popupName = formElement.querySelector('.popup__name');

let popupNameSubtitle = formElement.querySelector('.popup__name-info');

let submit = document.querySelector('.popup__submit-btn');



let openPopup = () => {
    popup.classList.toggle('overlay__active')
}
popupName.value = title.textContent
popupNameSubtitle.value = subtitle.textContent


openPopupBtn.addEventListener('click', openPopup);
popupExit.addEventListener('click', openPopup);

function rename(evt) {
evt.preventDefault()

 title.textContent = popupName.value;
 subtitle.textContent = popupNameSubtitle.value;
 popup.classList.toggle('overlay__active')
}
formElement.addEventListener('submit', rename);



