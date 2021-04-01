import {Popup} from "./Popup.js";
import {api} from "../../pages";

export default class PopupWithConfirm extends Popup {
    constructor(popupElement, handleFormSubmit) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit

    }
    setEventListeners() {
        super.setEventListeners();
        //добавение обработчика сабмита формы
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit()
        })
    }

    open(id,element) {
        this.idCard = id;
        this.elementCard = element;
        super.open();
    }
}