import {Popup} from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);
        this._title = data.title;
        this._image = data.image;
    }
    open(link, name) {
        this._selector.querySelector('.popup__image').src = link;
        this._selector.querySelector('.popup__image').alt = name;
        this._selector.querySelector('.popup__image-text').textContent = name;
        super.open();
    }
}