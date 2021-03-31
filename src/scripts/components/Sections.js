export default class Sections {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._elementsList = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._elementsList.append(element);
    }

    renderItems() {
        this._items.forEach(item => {
            this._renderer(item);
        });
    }
}
