export class Popup {
    constructor(popupSelector) {
        this._selector = document.querySelector(popupSelector)
    }
    open(){
        this._selector.classList.add('popup_active');
        document.addEventListener('keyup', (evt) => {
            this._handleEscClose(evt)
        })
    }
    close(){
        this._selector.classList.remove('popup_active');
        document.removeEventListener('keyup', (evt) => {
            this._handleEscClose(evt);
        })
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close()
        }
    }

    setEventListeners(){
    this._selector.querySelector('.popup__exit-btn').addEventListener('click', () => {
        this.close()
    })      // Выход по кнопки

    this._selector.addEventListener('mousedown', (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close()
        }
    })      //Выход из попапа кликом по фону
    }
}
