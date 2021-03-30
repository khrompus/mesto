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
    getUserId() {
        return this.id;
    }
    setUserInfo(item) {
        this._nameSelector.textContent = item.name;
        this._descriptionSelector.textContent = item.about;
        this._profileAvatar.src = item.avatar
        this.id = item._id
    }
}
