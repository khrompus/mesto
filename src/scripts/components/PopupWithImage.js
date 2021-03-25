import {Popup} from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
    }
    open(link, name) {
        this._imgElement = this._popupElement.querySelector('.popup__image')
        this._imgElement.src = link;
        this._imgElement.alt = name;
        this._popupElement.querySelector('.popup__image-text').textContent = name;
        super.open();
    }
}