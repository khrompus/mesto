import {Card} from './Card.js'
const openPopupBtn = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupExit = popup.querySelector('.popup__exit-btn');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const formElement = popup.querySelector('.popup__form');
const popupName = formElement.querySelector('.popup__input_type_first-name');
const popupNameSubtitle = formElement.querySelector('.popup__input_type_about-me');
const gridContainer = document.querySelector('.grid');
const popupGrid = document.querySelector('#popupAddCard');
const popupGridImageName = document.querySelector('.popup__input_type_image-name');
const popupGridLink = document.querySelector('.popup__input_type_link');
const popupImageExit = document.querySelector('.popup__image-exit-btn');
export const popupImage = document.querySelector('#popupImage');
const openGridPopupBtn = document.querySelector('.profile__button-add');
const exitGridPopup = document.querySelector('.popup__grid-exit-btn');
const popupAddImgSubmit = popupGrid.querySelector('.popup__form');
export const popupImageCard = popupImage.querySelector('.popup__image');
export const popupTextCard = popupImage.querySelector('.popup__image-text');
const gridArray = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
gridArray.forEach((item) => {
    const card = new Card(item, '.grid-template');
    const gridElement = card._generateCard();
    gridContainer.prepend(gridElement);

})





function addNewCard() {
    const data = {
        name: popupGridImageName.value,
        link: popupGridLink.value
    }
    const newCard = new Card(data, '.grid-template');
    const newGridElement = newCard._generateCard();
    gridContainer.prepend(newGridElement);
}

export function openPopup(popup) {
    popup.classList.add('popup_active');
    document.addEventListener('keydown', closePopupKey)
}

function closePopup(popup) {
    popup.classList.remove('popup_active');
    document.removeEventListener('keydown', closePopupKey)
}

const cardFormSubmitButton = popupGrid.querySelector('.popup__submit-btn');



const handlePopupActive = () => {
    openPopup(popup);
    popupName.value = title.textContent
    popupNameSubtitle.value = subtitle.textContent
}

function handleFormSubmit(evt) {
    evt.preventDefault()
    title.textContent = popupName.value;
    subtitle.textContent = popupNameSubtitle.value;
    closePopup(popup);
}

function handleAddCard() {

    addNewCard();
    disableButton(cardFormSubmitButton , options);
    popupGridImageName.value = ''
    popupGridLink.value = ''
    closePopup(popupGrid);

}

popupImageExit.addEventListener('click', () => {
    closePopup(popupImage);
})
exitGridPopup.addEventListener('click', () => {
    closePopup(popupGrid);
});
openPopupBtn.addEventListener('click', handlePopupActive);
popupExit.addEventListener('click', () => {
    closePopup(popup);
});

openGridPopupBtn.addEventListener('click', () => {
    openPopup(popupGrid);
});
popupAddImgSubmit.addEventListener('submit', handleAddCard);
formElement.addEventListener('submit', handleFormSubmit);
popupImage.addEventListener('click', closeByClick)
popupGrid.addEventListener('click', closeByClick);
popup.addEventListener('click', closeByClick);
function closeByClick(event) {
    const activityPopup = document.querySelector('.popup_active')
    if (event.target === event.currentTarget) {
        closePopup(activityPopup)
    }
}
function closePopupKey(evt) {
    if (evt.key === 'Escape') {
        const activityPopup = document.querySelector('.popup_active')
        closePopup(activityPopup);
    }
}


