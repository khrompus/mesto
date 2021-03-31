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
        this._nameSelector.textContent = data.name;
        this._descriptionSelector.textContent = data.about;
        this._profileAvatar.src = data.avatar
        this._myId = data._id
    }
}
