import { popupImageCard, popupImage, popupTextCard, openPopup } from './index.js'
export class Card {
    constructor(data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._template).content
            .querySelector('.grid__items')
            .cloneNode(true);
        return cardElement
    }

    _setEventListeners() {
        this._elementLike = this._element.querySelector('.grid__like');
        this._elementDelete = this._element.querySelector('.grid__delete-btn');
        this._elementPopupImage = this._element.querySelector('.grid__image');
        this._elementLike.addEventListener('click', (evt) => {
            this._likeCard(evt);
        })
        this._elementDelete.addEventListener('click', (evt) => {
            this._deleteCard(evt);
        })
        this._elementPopupImage.addEventListener('click', () => {
           this._handleCardClick();
        })
    }
    _handleCardClick() {
        openPopup(popupImage);
        popupImageCard.src = this._link;
        popupImageCard.alt = this._name
        popupTextCard.textContent = this._name
    }
    _generateCard() {
        this._element = this._getTemplate();
        this._gridImage = this._element.querySelector('.grid__image');
        this._gridText = this._element.querySelector('.grid__text');
        this._gridImage.src = this._link;
        this._gridImage.alt = this._name
        this._gridText.textContent = this._name
        this._setEventListeners();
        return this._element
    }
    _likeCard(evt) {
        evt.target.classList.toggle('grid__like_active');
    }
    _deleteCard(evt) {
        evt.target.closest('.grid__items').remove();
    }

}
