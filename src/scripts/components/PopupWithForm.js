import {Popup} from './Popup.js';
export  class PopupWithForm extends Popup {
    constructor(popupSelector, url, method, handleFormSubmit, api) {
        super(popupSelector, api);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupElement.querySelector('.popup__form');
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._popupFormSubmit = this._popupForm.querySelector('.popup__submit-btn');
        this._api = api;
        this._url = url;
        this._method = method;
    }
    close() {
        super.close();
        this._popupForm.reset();
        this._resetValidator('.popup__input')
    }
    open() {
        super.open();
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
            if (this._popupFormSubmit.textContent === 'Сохранить'){
                this._popupFormSubmit.textContent = 'Сохранение...';
            }
            else {
                this._popupFormSubmit.textContent = 'Создание...'
            }

            this._api.postInfo(this._url, this._method, this._getInputValues())
                .then(res => {
                    this._handleFormSubmit(res);
                })
                .catch(err => {
                    console.log('Ошибка при сохранении', err);
                })
                .finally(() => {
                        if (this._popupFormSubmit.textContent === 'Сохранение...'){
                            this._popupFormSubmit.textContent = 'Сохранить'
                        }else{
                            this._popupFormSubmit.textContent = 'Создать'
                        }
                })

            this.close();
        })
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }
}