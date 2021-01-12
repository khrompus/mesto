let openPopupBtn = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let popupExit = popup.querySelector('.popup__exit-btn');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let popupName = formElement.querySelector('.popup__name_firstName');
let popupNameSubtitle = formElement.querySelector('.popup__name_aboutMe');
let togglePopup = () => {
    popup.classList.toggle('popup__active')
    popupName.value = title.textContent
    popupNameSubtitle.value = subtitle.textContent
}
openPopupBtn.addEventListener('click', togglePopup);
popupExit.addEventListener('click', togglePopup);

function handleFormSubmit(evt) {
    evt.preventDefault()
    title.textContent = popupName.value;
    subtitle.textContent = popupNameSubtitle.value;
    togglePopup()
}

formElement.addEventListener('submit', handleFormSubmit);



