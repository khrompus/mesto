export default class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._authorization = config.authorization;
    }
    _parseResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
    }
    postInfo(url, method, data) {
        return fetch(`${this._baseUrl}${url}`, {
            method: method,
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                data
            ),
        })
            .then(res => this._parseResponse(res));
    }
    getUser() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        })
            .then(res => this._parseResponse(res));
    }
    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        })
            .then(res => this._parseResponse(res));
    }
    deleteCard({ _id }) {
        return fetch(`${this._baseUrl}/cards/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        })
            .then(res => this._parseResponse(res));
    }
    likeCard({ _id }) {
        return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        })
            .then(res => this._parseResponse(res));
    }
    likeCardDelete({ _id }) {
        return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        })
            .then(res => this._parseResponse(res));
    }
}
