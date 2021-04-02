import UserInfo from "../scripts/components/UserInfo";
import PopupWithForm from "../scripts/components/PopupWithForm";
import Api from "../scripts/components/Api"
import './index.css'
import Sections from "../scripts/components/Sections";
import {FormValidator} from '../scripts/components/FormValidator.js'
import Card from '../scripts/components/Card.js'
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithConfirm from "../scripts/components/PopupWithConfirm";
import {
    editProfileBtn,
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
    avatarForm,
    containerWithCard,
    deleteFormElement
} from '../scripts/utils/constants';

import {appendCard, prependCard, isLoading} from "../scripts/utils/utils";


let userId;
let cardId = null;
let myId;
export const userInfo = new UserInfo(profileName, profileDescription, avatar)

export const api = new Api(config)

function handleLikeCard(evt) {
    if (!this.like) {
        api.likeCard({_id: this._id})
            .then(data => {
                //пробовал сделать через card.setLike(), но не получается найти класс card , сейчас свойстсва не явлются приватнами.
                this.likes += 1;
                this.like = !this.like;
                this.element.querySelector('.grid__number-like').textContent = this.likes;
                this.element.querySelector('.grid__like').classList.add('grid__like_active');
            })
            .catch(err => {
                console.log('Ошибка при установке лайка', err.message);
            });
    } else {
        api.likeCardDelete({_id: this._id})
            .then(data => {
                //пробовал сделать через card.deleteLike(), но не получается найти класс card , сейчас свойстсва не явлются приватнами.
                if (this.likes > 0)
                { this.likes -= 1 }
                this.like = !this.like;
                this.element.querySelector('.grid__number-like').textContent = this.likes;
                this.element.querySelector('.grid__like').classList.remove('grid__like_active');
            })
            .catch(err => {
                console.log('Ошибка при удалении лайка', err.message);
            });
    }
    evt.stopPropagation();
}

function handleFormDelete() {   // не совсем понял как переместить этот хендлер в creatCard , но сейчас эти свойства не являются приватными.
    isLoading(deleteFormElement, true, 'Удаление...')
    api.deleteCard({_id: this.idCard})
        .then(res => {

            this.elementCard.remove();
            this.elementCard = null;
        })
        .catch(err => {
            console.log('Ошибка при удалении карточки', err);
        })
        .finally(()=> {
            this.close();
            isLoading(deleteFormElement, false, 'Да')
        })

}

function handleEditProfileFormSubmit(evt, data) {
    evt.preventDefault();
    isLoading(profileFormElement, true, 'Сохранение...')
    const body = JSON.stringify({
        name: data.name,
        about: data.description
    })
    api.sendProfile(body)
        .then((result) => {
            console.log(result);
            const {name, about, avatar, _id} = result;
            userInfo.setUserInfo({name, about, avatar, _id});
            popupProfile.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            isLoading(profileFormElement, false, 'Сохранить')
        });
}

function handleAddCardFormSubmit(evt, data) {
    evt.preventDefault();
    isLoading(cardFormElement, true, 'Создание...')
    const body = JSON.stringify({
        name: data.name,
        link: data.link
    })


    api.sendCard(body)

        .then((result) => {
            console.log(result);
            const createdCard = createCard(result);
            prependCard(createdCard)
            popupAdd.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            isLoading(cardFormElement, false, 'Создать')
        });
}

function handleFormSubmitAvatar(evt, dataAvatar) {
    evt.preventDefault();
    isLoading(avatarForm, true, 'Сохранение...')

    const body = JSON.stringify({
        avatar: dataAvatar.link
    })

    api.changeAvatar(body)
        .then((result) => {
            console.log(result);
            const {name, about, avatar, _id} = result;
            userInfo.setUserInfo({name, about, avatar, _id});
            popupEditAvatar.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            isLoading(avatarForm, false, 'Сохранить')
        });
}

function createCard(item) {
    const card = new Card(item, template,
        (link, name) => {
            popupImg.open(link, name);
        },
        (id, element) => {
            popupDelete.open(id, element);
        },
        myId,
        handleLikeCard
    );
    const cardElement = card.generateCard();
    return cardElement
    const cardElementLikes = card
    return cardElementLikes

}

// popup's
const popupDelete = new PopupWithConfirm(deleteCard, handleFormDelete);
popupDelete.setEventListeners();

const popupImg = new PopupWithImage(popupImage);
popupImg.setEventListeners();

const popupEditAvatar = new PopupWithForm(
    avatarPopup,
    handleFormSubmitAvatar
)
popupEditAvatar.setEventListeners();

const popupProfile = new PopupWithForm(
    openPopupEdit,
    handleEditProfileFormSubmit
);
popupProfile.setEventListeners();

const popupAdd = new PopupWithForm(
    addCardPopup,
    handleAddCardFormSubmit
);
popupAdd.setEventListeners();
// end popup's

// validation
const avatarValidation = new FormValidator(options, avatarForm)
avatarValidation.enableValidation()

const editProfileValidator = new FormValidator(options, profileFormElement);
editProfileValidator.enableValidation()

const addCardValidator = new FormValidator(options, cardFormElement);
addCardValidator.enableValidation();

// end validation


function renderCards(result) {
    const cardSection = new Sections({
        items: result,
        renderer: (item) => {
            const createdCard = createCard(item);
            appendCard(createdCard);
        }
    }, gridContainer);
    cardSection.renderItems();
}


popupAvatarEdit.addEventListener('click', () => {
    popupEditAvatar.open();
    avatarValidation.resetValidation()
});

editProfileBtn.addEventListener('click', (event) => {
    popupProfile.open(event);
    const {name, description} = userInfo.getUserInfo();
    editInputName.value = name;
    editInputDescription.value = description;
    editProfileValidator.resetValidation()
});

openGridPopupBtn.addEventListener('click', () => {
    popupAdd.open()
    addCardValidator.resetValidation()
});


Promise.all([api.getUser(), api.getCards()])
    .then((data) => {
        userInfo.setUserInfo(data[0]);
        myId = userInfo.getMyId();
        console.log(data)
        renderCards(data[1])
    })
    .catch(err => {
        console.log('Ошибка при получении данных', err.message);
    });
