export const editProfileBtn = document.querySelector('.profile__button-edit')
export const editInputName = document.querySelector('.popup__input_type_first-name')
export const editInputDescription = document.querySelector('.popup__input_type_about-me')
export const cardFormElement = document.querySelector('#AddCardForm');
export const addCardPopup = document.querySelector('#popupAddCard')
export const profileFormElement = document.querySelector('#editForm');
export const gridContainer = '.grid';
export const openGridPopupBtn = document.querySelector('.profile__button-add')
export const openPopupEdit = document.querySelector('#popupEdit')
export const popupImage = document.querySelector('#popupImage')
export const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonElement: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disable',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
}
export const gridArray = [
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