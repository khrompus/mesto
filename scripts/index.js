let openPopupBtn = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let popupExit = popup.querySelector('.popup__exit-btn');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
let formElement = popup.querySelector('.popup__form');
let popupName = formElement.querySelector('.popup__input_type_first-name');
let popupNameSubtitle = formElement.querySelector('.popup__input_type_about-me');
let templateGrid = document.querySelector('.grid-template').content;
let gridContainer = document.querySelector('.grid');
let popupGrid = document.querySelector('#popupAddCard');
let popupGridImageName = document.querySelector('.popup__input_type_image-name');
let popupGridLink = document.querySelector('.popup__input_type_link');
let popupImageExit = document.querySelector('.popup__image-exit-btn');
let popupImage = document.querySelector('#popupImage');
let openGridPopupBtn = document.querySelector('.profile__button-add');
let exitGridPopup = document.querySelector('.popup__grid-exit-btn');
let popupAddImgSubmit = popupGrid.querySelector('.popup__form');
let gridArray = [
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
gridArray.forEach(function (element) {
    const gridElement = templateGrid.cloneNode(true);
    gridElement.querySelector('.grid__image').src = element.link;
    gridElement.querySelector('.grid__text').textContent = element.name;
    gridElement.querySelector('.grid__image').alt = element.name;
    // handleOpenPopupImage(gridElement);
    handleReaction(gridElement);
    gridContainer.append(gridElement);
})
function deleteCard(evt) {
    evt.target.closest('.grid__items').remove();
}
function likeActive(evt) {
    evt.target.classList.toggle('grid__like_active');
}
function handleReaction(elem) {
    elem.querySelector('.grid__delete-btn').addEventListener('click', deleteCard);
    elem.querySelector('.grid__like').addEventListener('click', likeActive);
    elem.querySelector('.grid__image').addEventListener('click', handleOpenPopupImage)
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
function gridPopupActive() {
    popupGrid.classList.add('popup_active');
}
function gridPopupDisable() {
    popupGrid.classList.remove('popup_active');
}
function handleOpenPopupImage(evt) {
    const item = evt.target;
    popupImage.querySelector('.popup__image').src = item.getAttribute('src', true)
    popupImage.querySelector('.popup__image-text').textContent = item.closest('.grid__items').textContent
    popupImage.classList.add('popup_active');
}
function handleAddCard(evt) {
    evt.preventDefault();
    const elem = templateGrid.cloneNode(true);
    elem.querySelector('.grid__image').src = popupGridLink.value;
    elem.querySelector('.grid__text').textContent = popupGridImageName.value;
    handleReaction(elem);
    popupGridImageName.value = "";
    popupGridLink.value = "";
    gridContainer.prepend(elem);
    gridPopupDisable();
}
popupImageExit.addEventListener('click', function () {
    popupImage.classList.remove('popup_active');
})
exitGridPopup.addEventListener('click', gridPopupDisable);
openPopupBtn.addEventListener('click', activePopup);
popupExit.addEventListener('click', exitPopup);
openGridPopupBtn.addEventListener('click', gridPopupActive);
popupAddImgSubmit.addEventListener('submit', handleAddCard);
formElement.addEventListener('submit', handleFormSubmit);