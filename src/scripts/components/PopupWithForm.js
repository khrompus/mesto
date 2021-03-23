import {Popup} from './Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupSelector,handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;

    }
    close() {
        super.close();
        this._selector.querySelector('.popup__form').reset();
    }
    setEventListeners() {
        super.setEventListeners();
        this._selector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })
    }
    _getInputValues() {//собирает данные всех полей формы
        this._inputList = this._selector.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value
            console.log(this._formValues)
        })
        return this._formValues;

    }
}