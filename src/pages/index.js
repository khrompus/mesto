import UserInfo from "../scripts/components/UserInfo";
import {PopupWithForm} from "../scripts/components/PopupWithForm";
import Api from "../scripts/components/Api"
import './index.css'
import Sections from "../scripts/components/Sections";
import {FormValidator} from '../scripts/components/FormValidator.js'
import Card from '../scripts/components/Card.js'
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithConfirm from "../scripts/components/PopupWithConfirm";
import {editProfileBtn,
    editInputName,
    editInputDescription,
    cardFormElement,
    profileFormElement,
    gridContainer,
    openGridPopupBtn,
    options,
    addCardPopup,
    openPopupEdit,
    popupImage,
    template,
    profileName,
    profileDescription,
    config,
    avatar,
    deleteCard,
    avatarPopup,
    popupAvatarEdit,
    avatarForm
} from '../scripts/utils/constants';

const addCardValidator = new FormValidator(options, cardFormElement);
addCardValidator.enableValidation();


const userInfo = new UserInfo(profileName,profileDescription,avatar)
let myId;
function createCard(item) {
    const card = new Card(item, template,
        api,
        myId,
        (link, name) => {
            popupImg.open(link, name);
        },
        (id, element) => {
            popupDelete.open(id, element);
        }
    );
    const cardElement = card.generateCard();
    return cardElement
}
const api = new Api(config)
Promise.all([api.getUser(), api.getCards()])
    .then((data) => {
        userInfo.setUserInfo(data[0]);
        myId = userInfo.getUserId();
        console.log(data)
        cardsList.renderItems(data[1]);

    })
    .catch(err => {
        console.log('Ошибка при получении данных', err.message);
    });
const cardsList = new Sections({
    items:{},
        renderer: (item) => {
            createCard(item)
            cardsList.addItem(createCard(item));
        },
    },
    gridContainer
);

const popupDelete = new PopupWithConfirm(
    deleteCard,
    '/cards',
    'DELETE',
    (_id) => {
        popupDelete.open(_id);
    },
    api
);
popupDelete.setEventListeners();
const avatarValidation = new FormValidator(options,avatarForm)
avatarValidation.enableValidation()

const popupEditAvatar = new PopupWithForm(
    avatarPopup,
    '/users/me/avatar',
    'PATCH',
    (item) => {
        userInfo.setUserInfo(item);
        avatarValidation.toggleButtonState()
    },
    api
);
popupEditAvatar.setEventListeners();
popupAvatarEdit.addEventListener('click', (event) => {
    popupEditAvatar.open(event);
});
const editProfileValidator = new FormValidator(options, profileFormElement);
editProfileValidator.enableValidation()
const popupProfile = new PopupWithForm(
    openPopupEdit,
    '/users/me',
    'PATCH',
    (item) => {
        userInfo.setUserInfo(item);
        editProfileValidator.toggleButtonState()
    },
    api
);
popupProfile.setEventListeners();
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
    '/cards',
    'POST',
    (item) => {
        const cardElement = createCard(item);
        cardsList.addNewItem(cardElement);
    },
    api
);
popupAdd.setEventListeners();

openGridPopupBtn.addEventListener('click', () => {
    popupAdd.open()
    addCardValidator.toggleButtonState()
});