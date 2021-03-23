import UserInfo from "./scripts/components/UserInfo";
import {PopupWithForm} from "./scripts/components/PopupWithForm";
import './pages/index.css'
import {Sections} from "./scripts/components/Sections";
import {FormValidator} from './scripts/components/FormValidator.js'
import {Card} from './scripts/components/Card.js'
import PopupWithImage from "./scripts/components/PopupWithImage";
const cardFormElement = document.querySelector('#AddCardForm');
const profileFormElement = document.querySelector('#editForm');
const openPopupEdit = document.querySelector('.profile__button-edit');
const gridContainer = '.grid';
const openGridPopupBtn = document.querySelector('.profile__button-add')
export const popupImage = document.querySelector('#popupImage');
export const popupImageCard = popupImage.querySelector('.popup__image');
export const popupTextCard = popupImage.querySelector('.popup__image-text');
const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonElement: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disable',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
}
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
// const cards = new Sections({
//     items: gridArray,
//     renderer: (item) => {
//         const card = new Card(item, '.grid-template',
//             (link,name) => {
//                 popupImg.open(link,name);
//             }
//         );
//
//         const cardElement = card._generateCard()
//         cards.addItem(cardElement)
//         card.setEventListeners()
//     }
// }, gridContainer)
// cards.renderItems()


const cardsList = new Sections({
        items: gridArray,
        renderer: (item) => {
            //// добавление карточки к галерее elements
            const card = new Card(item, '.grid-template',
                (link, name) => {
                    popupImg.open(link, name);
                }
            );
            const cardElement = card._generateCard();
            cardsList.addItem(cardElement);
            card.setEventListeners()
        },
    },
    gridContainer
);
cardsList.renderItems()




// const AddCardPopup = new PopupWithForm('#popupAddCard',
//     '.popup__submit-btn')
// AddCardPopup.setEventListeners()

const userInfo = new UserInfo('.profile__title','.profile__subtitle')

const popupProfile = new PopupWithForm(
    '#popupEdit',
    (item) => {
        userInfo.setUserInfo(item);
    }
);
popupProfile.setEventListeners();
openPopupEdit.addEventListener('click', (event) => {
    popupProfile.open.bind(popupProfile)();
    const user = userInfo.getUserInfo.bind(userInfo)();
    popupProfile._selector.querySelector('.popup__input_type_first-name').value = user.name;
    popupProfile._selector.querySelector('.popup__input_type_about-me').value = user.description;
});
const popupImg = new PopupWithImage({},
    '#popupImage');
popupImg.setEventListeners();

const popupAdd = new PopupWithForm(
    '#popupAddCard',
    (item) => {
        const card = new Card(item, '.grid-template',
            (name, link) => {
                popupImg.open(name, link);
            }
        );
        const cardElement = card._generateCard();
        cardsList.addItem(cardElement);
        card.setEventListeners()
    }
);
popupAdd.setEventListeners();
openGridPopupBtn.addEventListener('click', popupAdd.open.bind(popupAdd));
const editProfileValidator = new FormValidator(options, profileFormElement);
editProfileValidator.enableValidation();
const addCardValidator = new FormValidator(options, cardFormElement);
addCardValidator.enableValidation();
