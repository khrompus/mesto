const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonElement: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disable',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
}
const showInputError = (formElement, inputElement, errorMessage, options) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(options.inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(options.errorClass)
}
const hideInputError = (formElement, inputElement, options) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(options.inputErrorClass);
    errorElement.classList.remove(options.errorClass);
    errorElement.textContent = '';
};


const checkInputValidity = (formElement, inputElement, options) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, options);
    } else {
        hideInputError(formElement, inputElement, options);
    }
};
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}
function disableButton(buttonElement, options) {
    buttonElement.disabled = true
    buttonElement.classList.add(options.inactiveButtonClass);
}
const toggleButtonState = (inputList, buttonElement, options) => {
    if (hasInvalidInput(inputList)) {
        disableButton(buttonElement, options);
    } else {
        buttonElement.disabled = false
        buttonElement.classList.remove(options.inactiveButtonClass)
    }
}
const setEventListeners = (formElement, options) => {
    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector))
    const buttonElement = formElement.querySelector(options.buttonElement)
    toggleButtonState(inputList, buttonElement, options)
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, options)
            toggleButtonState(inputList, buttonElement, options)

        })
    })

}
const enableValidation = (options) => {
    const formList = Array.from(document.querySelectorAll(options.formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault()
        })
        setEventListeners(formElement, options);
    })
}

enableValidation(options);