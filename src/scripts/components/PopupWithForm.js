import {FormValidator} from "./FormValidator";
import {Popup} from './Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupElement,handleFormSubmit) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;

    }
    close() {
        super.close();
        this._popupElement.querySelector('.popup__form').reset();
        this._resetValidator('.popup__input')
    }
    _getInputList(inputElement){
        const errorElement = this._popupElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.remove('popup__input_type_error')
        errorElement.classList.remove('popup__input-error_visible')
        errorElement.textContent = ''

    }
    _resetValidator(inputElement){
        this._inputList = Array.from(this._popupElement.querySelectorAll('.popup__input'))
        this._inputList.forEach((inputElement) => {
            this._getInputList(inputElement)
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();

        })
    }
    // _resetValidator() {
    //     this._inputError = this._popupElement.querySelector('.popup__input')
    //     this._errorList = this._popupElement.querySelectorAll('.popup__input-error');
    //     this._error
    //         // this._errorList.textContent = "";
    // }
    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value
        })
        return this._formValues;

    }
}