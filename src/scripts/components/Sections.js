export default class Section {
    constructor({ items, renderer, api }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._api = api;
        this._container = document.querySelector(containerSelector);
    }
    renderItems(items) {
        this._items = items;
        this._items.forEach(item =>
            this._renderer(item)
        )
    }
    addNewItem(element) {
        this._container.prepend(element);
    }
    addItem(element) {
        this._container.append(element);
    }
}
