
export default class UserInfo {
    constructor(nameSelector, descriptionSelector) {
        this._nameSelector = nameSelector;
        this._descriptionSelector = descriptionSelector;
    }
    getUserInfo() {
        return {name : this._nameSelector.textContent, description: this._descriptionSelector.textContent }
    }
    setUserInfo(item) {
        this._nameSelector.textContent = item.name;
        this._descriptionSelector.textContent = item.description;
    }
}