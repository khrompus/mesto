import {Popup} from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(popupElement, handleFormSubmit) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        const inputs = this._popupElement.querySelectorAll('.popup__input');
        return Array.from(inputs).reduce((obj, input) => {
            const key = input.name;
            const value = input.value;
            obj[key] = value;
            return obj;
        }, {});
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popupElement.querySelector('.popup__form');
        this._form.addEventListener('submit', (evt) => {
            this._handleFormSubmit(evt, this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}