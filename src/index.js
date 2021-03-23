import UserInfo from "./scripts/components/UserInfo";
import {PopupWithForm} from "./scripts/components/PopupWithForm";
import './pages/index.css'
import {Sections} from "./scripts/components/Sections";
import {FormValidator} from './scripts/components/FormValidator.js'
import {Card} from './scripts/components/Card.js'
import PopupWithImage from "./scripts/components/PopupWithImage";
import {editProfileBtn,
    editInputName,
    editInputDescription,
    cardFormElement,
    profileFormElement,
    gridContainer,
    openGridPopupBtn,
    options,
    gridArray
} from './scripts/utils/constants';
const cardsList = new Sections({
        items: gridArray,
        renderer: (item) => {
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
const editProfileValidator = new FormValidator(options, profileFormElement);
editProfileValidator.enableValidation();

const addCardValidator = new FormValidator(options, cardFormElement);
addCardValidator.enableValidation();
cardsList.renderItems()
const popupProfile = new PopupWithForm(
    '#popupEdit',
    (item) => {
        userInfo.setUserInfo(item);
    }
);
popupProfile.setEventListeners();
const userInfo = new UserInfo('.profile__title','.profile__subtitle')

editProfileBtn.addEventListener('click', (event) => {
    popupProfile.open(event);
    const user = userInfo.getUserInfo();
    editInputName.value = user.name;
    editInputDescription.value = user.description;
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
            },
        );
        addCardValidator.toggleButtonState()
        const cardElement = card._generateCard();
        cardsList.addItem(cardElement);
        card.setEventListeners()
    }
);
popupAdd.setEventListeners();
openGridPopupBtn.addEventListener('click', popupAdd.open.bind(popupAdd));

