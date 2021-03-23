
export default class UserInfo {
    constructor(nameSelector, descriptionSelector) {
        this._nameSelector = document.querySelector(nameSelector);
        this._descriptionSelector = document.querySelector(descriptionSelector);
    }
    getUserInfo() {
        return {name : this._nameSelector.textContent, description: this._descriptionSelector.textContent }
    }
    setUserInfo(item) {
        this._nameSelector.textContent = item.name;
        this._descriptionSelector.textContent = item.description;
    }
}