let openPopupBtn = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let popupExit = popup.querySelector('.popup__exit-btn');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let popupName = formElement.querySelector('.popup__input_type_first-name');
let popupNameSubtitle = formElement.querySelector('.popup__input_type_about-me');
let templateGrid = document.querySelector('.grid-template').content;
let gridContainer = document.querySelector('.grid');
let popupGrid = document.querySelector('#popupAddCard');
let popupGridImage = document.querySelector('.popup__input_type_image-name');
let popupGridLink = document.querySelector('.popup__input_type_link');
let popupOpenImage = document.querySelector('.grid__image-active');
let popupImageExit = document.querySelector('.popup__image-exit-btn');
let popupImage = document.querySelector('#popupImage');
let openGridPopupBtn = document.querySelector('.profile__button-add');
let exitGridPopup = document.querySelector('.popup__grid-exit-btn');
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
gridArray.forEach(function (element) {
    const gridElement = templateGrid.cloneNode(true);
    gridElement.querySelector('.grid__image').src = element.link;
    gridElement.querySelector('.grid__text').textContent = element.name;
    gridElement.querySelector('.grid__image').alt = element.name
    // like active
    gridElement.querySelector('.grid__like').addEventListener('click', likeActive)
    //remove grid items
    gridElement.querySelector('.grid__delete-btn').addEventListener('click', deleteCard)
    gridContainer.append(gridElement);
})

function deleteCard(evt) {
    evt.target.closest('.grid__items').remove();
}
function likeActive(evt) {
    evt.target.classList.toggle('grid__like_active');
}

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
openGridPopupBtn.addEventListener('click', function () {
    popupGrid.classList.add('popup_active');
})
exitGridPopup.addEventListener('click', function () {
    popupGrid.classList.remove('popup_active');
})

popupImageExit.addEventListener('click', function () {
    popupImage.classList.remove('popup_active');
})
// popupOpenImage.addEventListener('click', function () {
//     popupImage.classList.add('popup_active');
// })