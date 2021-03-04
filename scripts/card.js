export default class Card {
    constructor(data) {
    this._name = data.name;
    this._link = data.link;
    }
    _getTemplate(){
        const cardElement = document
            .querySelector('#gridTemplate')
            .cloneNode(true);
        return cardElement
    }
    _setEventListeners(){

    }
    _generateCard(){
        this._element = this._getTemplate();
        this._setEventListeners();
    }
    _handleLikeButton(evt) {
        evt.target.classList.toggle('grid__like_active');
    }
    _handleDeleteCard(evt) {
        evt.target.closest('.grid__items').remove();
    }
    _handleOpenPopupImage(data) {
        thispopupImageCard.src = data.link;
        popupImageCard.alt = data.name;
        popupTextCard.textContent = data.name;
        openPopup(popupImage);
    }
}
