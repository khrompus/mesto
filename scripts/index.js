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
    // like active
    gridElement.querySelector('.grid__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('grid__like_active');
    })
    //remove grid items
    let removeItem = gridElement.querySelector('.grid__items');
    gridElement.querySelector('.grid__delete-btn').addEventListener('click', function (event) {
        event.target = removeItem.remove();
    })
    gridContainer.append(gridElement);
})
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