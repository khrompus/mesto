import UserInfo from "../scripts/components/UserInfo";
import {PopupWithForm} from "../scripts/components/PopupWithForm";
import './index.css'
import {Sections} from "../scripts/components/Sections";
import {FormValidator} from '../scripts/components/FormValidator.js'
import {Card} from '../scripts/components/Card.js'
import PopupWithImage from "../scripts/components/PopupWithImage";
import {editProfileBtn,
    editInputName,
    editInputDescription,
    cardFormElement,
    profileFormElement,
    gridContainer,
    openGridPopupBtn,
    options,
    gridArray,
    addCardPopup,
    openPopupEdit,
    popupImage
} from '../scripts/utils/constants';

const addCardValidator = new FormValidator(options, cardFormElement);
addCardValidator.enableValidation();



const cardsList = new Sections({
        items: gridArray,
        renderer: (item) => {
            createCard(item)
        },
    },
    gridContainer
);
function createCard(item) {
    const card = new Card(item, '.grid-template',
        (link, name) => {
            popupImg.open(link, name);
        }
    );
    const cardElement = card._generateCard();
    cardsList.addItem(cardElement);
    card.setEventListeners()
}

const editProfileValidator = new FormValidator(options, profileFormElement);
editProfileValidator.enableValidation() //при закрытие попап'а c ошибками ,
                                        // они не исчезают при открытие попа'а,
                                        // т.к происходит reset формы, и слушатель
                                        // input не замечает этого действия


cardsList.renderItems()
const popupProfile = new PopupWithForm(
     openPopupEdit,
    (item) => {
        userInfo.setUserInfo(item);
        editProfileValidator.toggleButtonState()

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
const popupImg = new PopupWithImage(popupImage);
popupImg.setEventListeners();
const popupAdd = new PopupWithForm(
    addCardPopup,
    (item) => {
        createCard(item)
    },
);
popupAdd.setEventListeners();
openGridPopupBtn.addEventListener('click', () => {
    popupAdd.open()
    addCardValidator.toggleButtonState()
});

