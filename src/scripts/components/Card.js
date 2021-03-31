export default class Card {
    constructor(item, cardSelector, handleCardClick, handleCardDelete, myId, isLikeByMe, handleLikeClick) {
        this._template = cardSelector;
        this._name = item.name;
        this._link = item.link;
        this._id = item._id;
        this._likes = item.likes
        this._owner = item.owner._id;
        this._handleCardClick = handleCardClick;
        this._myId = myId
        this._handleCardDelete = handleCardDelete
        this._handleLikeClick = handleLikeClick
        this._isLikeByMe = isLikeByMe;
        this._isLiked = false;
    }
        _getTemplate() {
         const cardElement = this._template.content
             .querySelector('.grid__items')
             .cloneNode(true);
         return cardElement
     }
    _setEventListeners() {
        this._likeBtn = this._element.querySelector('.grid__like')
        this._likeBtn.addEventListener('click', (evt) => {
            evt.target.classList.toggle('grid__like_active');
            this._handleLikeClick(this._isLiked, this._setLikesCount.bind(this), this._switchLike.bind(this));
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
        this._setLikesCount(this._likes.length);
        this._isLiked = this._isLikeByMe(this._likes);
        this._deleteCardBtn = this._element.querySelector('.grid__delete-btn');
        const elementImg = this._element.querySelector('.grid__image');
        elementImg.src = this._link;
        elementImg.alt = this._name;
        if(this._isLiked){
            this._element.querySelector('.grid__like').classList.add('grid__like_active');
        };
        if (!(this._myId === this._owner)){
            this._element.querySelector('.grid__delete-btn').classList.add('grid__delete-btn_disable')
        }
        this._setEventListeners();
        return this._element;
    }
    _switchLike() {
        this._isLiked = !this._isLiked;
    }
    _setLikesCount(likesNumber) {
        this._element.querySelector('.grid__number-like').textContent = likesNumber;
    }
    deleteCard() {
        this._element.remove();
        console.log(this._element)
    }
}