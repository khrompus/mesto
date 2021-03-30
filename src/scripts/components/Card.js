export default class Card {
    constructor(item, cardSelector, api, myId, handleCardClick, handleCardDelete) {
        this._template = cardSelector;
        this._name = item.name;
        this._link = item.link;
        this._id = item._id;
        this._likes = item.likes.length;
        this._owner = item.owner._id;
        this.myId = myId;
        this._like = item.likes.some(function (like) {
            return like._id === myId;
        });
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._api = api;
    }
        _getTemplate() {
         const cardElement = this._template.content
             .querySelector('.grid__items')
             .cloneNode(true);
         return cardElement
     }
    _toggleLikeElement(evt) {
        if (!this._like) {
            this._api.likeCard({_id: this._id})
                .then(data => {
                    this._likes += 1;
                    this._like = !this._like;
                    this._element.querySelector('.grid__number-like').textContent = this._likes;
                    this._element.querySelector('.grid__like').classList.add('grid__like_active');
                })
                .catch(err => {
                    console.log('Ошибка при установке лайка', err.message);
                });
        } else {
            this._api.likeCardDelete({_id: this._id})
                .then(data => {
                    if (this._likes > 0) {
                        this._likes -= 1
                    };
                    this._like = !this._like;
                    this._element.querySelector('.grid__number-like').textContent = this._likes;
                    this._element.querySelector('.grid__like').classList.remove('grid__like_active');
                })
                .catch(err => {
                    console.log('Ошибка при удалении лайка', err.message);
                });
        }
        evt.stopPropagation();
    }
    _setEventListeners() {
        this._element.querySelector('.grid__like').addEventListener('click', (event) => {
            this._toggleLikeElement(event);
        });
        this._element.querySelector('.grid__delete-btn').addEventListener('click', (event) => {
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
        this._element.querySelector('.grid__number-like').textContent = this._likes;
        this._deleteCardBtn = this._element.querySelector('.grid__delete-btn');
        const elementImg = this._element.querySelector('.grid__image');
        if (this._like) {
            this._element.querySelector('.grid__like').classList.add('grid__like_active');
        }
        if (!(this._owner === this.myId)) {
            this._deleteCardBtn.classList.add('grid__delete-btn_disable');
        }
        elementImg.src = this._link;
        elementImg.alt = this._name;
        this._setEventListeners();
        return this._element;
    }
}