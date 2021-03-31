export class FormValidator {
    constructor(options, formElement) {
        this._options = options
        this._formElement = formElement
    };
    _getErrorElement(inputElement) {
        return this._formElement.querySelector(`.${inputElement.id}-error`)
    };

    _showInputError(inputElement, errorMessage){
        const errorElement = this._getErrorElement(inputElement);
        inputElement.classList.add(this._options.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._options.errorClass);
    };
    _hideInputError(inputElement){
        const errorElement = this._getErrorElement(inputElement)
        inputElement.classList.remove(this._options.inputErrorClass)
        errorElement.classList.remove(this._options.errorClass)
        errorElement.textContent = ''
    };
    _checkInputValidity(inputElement){
        const errorElement = this._getErrorElement(inputElement)
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage, errorElement);
        } else {
            this._hideInputError(inputElement);
        }
    }
    _toggleButtonState() {
        const errors = !this._formElement.checkValidity()
        this._buttonElement.disabled = errors
        this._buttonElement.classList.toggle(this._options.inactiveButtonClass, errors)
    }
    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._options.inputSelector))
        this._buttonElement = this._formElement.querySelector(this._options.buttonElement)
        this._toggleButtonState(this._formElement, this._buttonElement, this._options.inactiveButtonClass)
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', (evt) => {
                this._checkInputValidity(inputElement)
            })
        })
        this._formElement.addEventListener('input', () => {
                this._toggleButtonState(
                    this._formElement,
                    this._buttonElement,
                    this._options.inactiveButtonClass
                )
            }
        )

    }
    resetValidation() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
        this._toggleButtonState();
    }
    enableValidation() {
        this._setEventListeners()
    }


    }