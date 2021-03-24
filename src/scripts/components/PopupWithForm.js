import {Popup} from './Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupSelector,handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;

    }
    close() {
        super.close();
        this._popupElement.querySelector('.popup__form').reset();
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();

        })
    }
    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value
        })
        return this._formValues;

    }
}