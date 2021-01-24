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

function renderCard() {
    gridArray.forEach(function (element) {
        const newCard = createNewCard(element);
        addNewCard(newCard);
    })
}

function addNewCard(element) {
    gridContainer.append(element)
}

function createNewCard(element) {
    const gridElement = templateGrid.cloneNode(true);
    gridElement.querySelector('.grid__image').src = element.link;
    gridElement.querySelector('.grid__text').textContent = element.name;
    gridElement.querySelector('.grid__image').alt = element.name;
    handleReaction(gridElement);
    return gridElement;
}

function openPopup(popup) {
    popup.classList.add('popup_active');
}

function closePopup(popup) {
    popup.classList.remove('popup_active');
}

function deleteCard(evt) {
    evt.target.closest('.grid__items').remove();
}

function activeLike(evt) {
    evt.target.classList.toggle('grid__like_active');
}

function handleReaction(elem) {
    elem.querySelector('.grid__delete-btn').addEventListener('click', deleteCard);
    elem.querySelector('.grid__like').addEventListener('click', activeLike);
    elem.querySelector('.grid__image').addEventListener('click', function handleOpenPopupImage(evt) {
        const item = evt.target;
        popupImageCard.src = item.getAttribute('src', true);
        popupImageCard.alt = item.closest('.grid__items').textContent;
        popupTextCard.textContent = item.closest('.grid__items').textContent;
        openPopup(popupImage);
    });
}

let activePopup = () => {
    popup.classList.add('popup_active')
    popupName.value = title.textContent
    popupNameSubtitle.value = subtitle.textContent
}
let exitPopup = () => {
    popup.classList.remove('popup_active')
}

function handleFormSubmit(evt) {
    evt.preventDefault()
    title.textContent = popupName.value;
    subtitle.textContent = popupNameSubtitle.value;
    exitPopup();
}

function createCard(item) {
    item.querySelector('.grid__image').src = popupGridLink.value;
    item.querySelector('.grid__text').textContent = popupGridImageName.value;
    item.querySelector('.grid__image').alt = popupGridImageName.value;
}

function handleAddCard(evt) {
    evt.preventDefault();
    const elem = templateGrid.cloneNode(true);
    createCard(elem);
    handleReaction(elem);
    popupGridImageName.value = "";
    popupGridLink.value = "";
    addAtFirstCard(elem);
    closePopup(popupGrid);
}

function addAtFirstCard(element) {
    gridContainer.prepend(element);
}

renderCard()
popupImageExit.addEventListener('click', () => {
    closePopup(popupImage);
})
exitGridPopup.addEventListener('click', () => {
    closePopup(popupGrid);
});
openPopupBtn.addEventListener('click', activePopup);
popupExit.addEventListener('click', exitPopup);
openGridPopupBtn.addEventListener('click', () => {
    openPopup(popupGrid);
});
popupAddImgSubmit.addEventListener('submit', handleAddCard);
formElement.addEventListener('submit', handleFormSubmit);