const openPopupBtn = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const popupExit = popup.querySelector('.popup__exit-btn');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const formElement = popup.querySelector('.popup__form');
const popupName = formElement.querySelector('.popup__input_type_first-name');
const popupNameSubtitle = formElement.querySelector('.popup__input_type_about-me');
const templateGrid = document.querySelector('.grid-template').content;
const gridContainer = document.querySelector('.grid');
const popupGrid = document.querySelector('#popupAddCard');
const popupGridImageName = document.querySelector('.popup__input_type_image-name');
const popupGridLink = document.querySelector('.popup__input_type_link');
const popupImageExit = document.querySelector('.popup__image-exit-btn');
const popupImage = document.querySelector('#popupImage');
const openGridPopupBtn = document.querySelector('.profile__button-add');
const exitGridPopup = document.querySelector('.popup__grid-exit-btn');
const popupAddImgSubmit = popupGrid.querySelector('.popup__form');
const popupImageCard = popupImage.querySelector('.popup__image');
const popupTextCard = popupImage.querySelector('.popup__image-text');
const popupEdit = document.querySelector('#popupEdit')
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
const getCardElement = (data) => {
    const cardElement = templateGrid.cloneNode(true);
    const likeButton = cardElement.querySelector('.grid__like');
    const deleteButton = cardElement.querySelector('.grid__delete-btn');
    const cardImage = cardElement.querySelector('.grid__image');
    cardElement.querySelector('.grid__text').textContent = data.name;
    likeButton.addEventListener('click', handleLikeButton);
    deleteButton.addEventListener('click', handleDeleteCard);
    cardImage.src = data.link
    cardImage.alt = data.name;
    cardImage.addEventListener('click', () => handleOpenPopupImage(data));
    return cardElement;
};

function renderCard() {
    gridArray.forEach(function (element) {
        const newCard = getCardElement(element);
        addNewCard(newCard);
    })
}

function addNewCard(element) {
    gridContainer.prepend(element);
}

function handleDeleteCard(evt) {
    evt.target.closest('.grid__items').remove();
}

function handleLikeButton(evt) {
    evt.target.classList.toggle('grid__like_active');
}

function handleOpenPopupImage(data) {
    popupImageCard.src = data.link;
    popupImageCard.alt = data.name;
    popupTextCard.textContent = data.name;
    openPopup(popupImage);
}

function openPopup(popup) {
    popup.classList.add('popup_active');
    document.addEventListener('keydown', closePopupKey)
}

function closePopup(popup) {
    popup.classList.remove('popup_active');
    document.removeEventListener('keydown', closePopupKey)
}

const handlePopupActive = () => {
    openPopup(popup);
    popupName.value = title.textContent
    popupNameSubtitle.value = subtitle.textContent
    setEventListeners(popupEdit, options)
}

function handleFormSubmit(evt) {
    evt.preventDefault()
    title.textContent = popupName.value;
    subtitle.textContent = popupNameSubtitle.value;
    closePopup(popup);
}

function handleAddCard(evt) {
    evt.preventDefault();
    const newCard = getCardElement({
        name: popupGridImageName.value,
        link: popupGridLink.value
    });
    popupGridImageName.value = ''
    popupGridLink.value = ''
    addNewCard(newCard);
    setEventListeners(popupGrid, options)
    closePopup(popupGrid);

}

renderCard()
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