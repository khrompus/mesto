export class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement
    }
    open(){
        this._popupElement.classList.add('popup_active');
        document.addEventListener('keyup',
            this._handleEscClose.bind(this)
        )
    }
    close(){
        this._popupElement.classList.remove('popup_active');
        document.removeEventListener('keyup',
           this._handleEscClose.bind(this))
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close()
        }
    }
    setEventListeners(){
        this._popupElement.querySelector('.popup__exit-btn').addEventListener('click', () => {
        this.close()
    })      // Выход по кнопки
        this._popupElement.addEventListener('mousedown', (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close()
        }
    })      //Выход из попапа кликом по фону
    }
}
