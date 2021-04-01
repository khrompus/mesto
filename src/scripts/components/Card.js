import {api} from "../../pages";
export default class Card {
    constructor(item, cardSelector, handleCardClick, handleCardDelete, myId, handleLikeCard) {
        this._template = cardSelector
        this._name = item.name;
        this._link = item.link;
        this._id = item._id;
        this._likes = item.likes.length;
        this._owner = item.owner._id;
        this._myId = myId;
        this._like = item.likes.some(function(like) {
            return like._id === myId;
        });
        this._handleLikeCard = handleLikeCard
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
    }
    _getTemplate() {
         const cardElement = this._template.content
             .querySelector('.grid__items')
             .cloneNode(true);
         return cardElement
     }

    _setEventListeners() {
        this._likeBtn = this._element.querySelector('.grid__like')
        this._likeBtn.addEventListener('click', (event) => {
            this._handleLikeCard(event);
        });
        this._deleteCardBtn.addEventListener('click', (event) => {
             this._handleCardDelete(this._id, this._element);
        });
        this._elementPopupImage = this._element.querySelector('.grid__image');
        this._elementPopupImage.addEventListener('click', () => {
              this._handleCardClick(this._link, this._name)
        })
    }
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.grid__text').textContent = this._name;
        this._deleteCardBtn = this._element.querySelector('.grid__delete-btn');
        const elementImg = this._element.querySelector('.grid__image');
        elementImg.src = this._link;
        elementImg.alt = this._name;
        this._element.querySelector('.grid__number-like').textContent = this._likes;
        if (this._like) {
            this._element.querySelector('.grid__like').classList.add('grid__like_active');
        }
        elementImg.src = this._link;
        elementImg.alt = this._name;
        if (!(this._myId === this._owner)){
             this._deleteCardBtn.classList.add('grid__delete-btn_disable')
         }
        this._setEventListeners();
        return this._element;
    }
}