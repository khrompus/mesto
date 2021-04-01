export default class UserInfo {
    constructor(nameSelector, descriptionSelector, profileAvatar) {
        this._nameSelector = nameSelector;
        this._descriptionSelector = descriptionSelector;
        this._profileAvatar = profileAvatar
    }
    getUserInfo() {
        return {name : this._nameSelector.textContent, description: this._descriptionSelector.textContent ,
         avatar: this._profileAvatar.src
        }
    }
    getMyId(){
        return this._myId
    }
    setUserInfo(data) {
        if(data.name){
            this._nameSelector.textContent = data.name;
        }else {
            console.log ('Произошла ошибка в смене имени')
        }
        if (data.about){
            this._descriptionSelector.textContent = data.about;
        }else{
            console.log ('Произошла ошибка в смене информации о себе')
        }
        if(data.avatar){
            this._profileAvatar.src = data.avatar
        }else{
            console.log ('Произошла ошибка в смене аватара')
        }
        if(data._id){
            this._myId = data._id
        }else{
            console.log ('Произошла ошибка, не найдено id')
        }
    }
}
