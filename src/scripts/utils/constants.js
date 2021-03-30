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
export const template = document.querySelector('.grid-template')
export const profileName = document.querySelector('.profile__title')
export const profileDescription = document.querySelector('.profile__subtitle')
export const deleteCard = document.querySelector('#deleteCard')
export const avatar = document.querySelector('.profile__avatar')
export const avatarPopup = document.querySelector('#newImage')
export const avatarForm = document.querySelector('#newAvatarForm')
export let userId = null;
export let cardsId = null;
export const popupAvatarEdit = document.querySelector('.profile__avatar-btn')
export const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonElement: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disable',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
}
export const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
    authorization: 'f0422778-420b-41b4-a52e-ffa4edcaf604'
}