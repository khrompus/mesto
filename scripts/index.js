let openPopupBtn = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let popupExit = popup.querySelector('.popup__exit-btn');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let popupName = formElement.querySelector('.popup__name_firstName');
let popupNameSubtitle = formElement.querySelector('.popup__name_aboutMe');
let activePopup = () => {
    popup.classList.add('popup_active')
    popupName.value = title.textContent
    popupNameSubtitle.value = subtitle.textContent
}
let exitPopup = () => {
    popup.classList.remove('popup_active')
}
openPopupBtn.addEventListener('click', activePopup);
popupExit.addEventListener('click', exitPopup);

function handleFormSubmit(evt) {
    evt.preventDefault()
    title.textContent = popupName.value;
    subtitle.textContent = popupNameSubtitle.value;
    exitPopup();
}

formElement.addEventListener('submit', handleFormSubmit);



