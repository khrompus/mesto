(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=e,this._descriptionSelector=n,this._profileAvatar=r}var n,r;return n=t,(r=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,description:this._descriptionSelector.textContent,avatar:this._profileAvatar.src}}},{key:"getMyId",value:function(){return this._myId}},{key:"setUserInfo",value:function(e){e.name?this._nameSelector.textContent=e.name:console.log("Произошла ошибка в смене имени"),e.about?this._descriptionSelector.textContent=e.about:console.log("Произошла ошибка в смене информации о себе"),e.avatar?this._profileAvatar.src=e.avatar:console.log("Произошла ошибка в смене аватара"),e._id?this._myId=e._id:console.log("Произошла ошибка, не найдено id")}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupElement.classList.add("popup_active"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_active"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__exit-btn").addEventListener("click",(function(){e.close()})),this._popupElement.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&n(t.prototype,r),e}();function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(f,e);var t,n,r,o,l=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(o){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function f(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=l.call(this,e))._handleFormSubmit=t,n}return t=f,(n=[{key:"_getInputValues",value:function(){var e=this._popupElement.querySelectorAll(".popup__input");return Array.from(e).reduce((function(e,t){var n=t.name,r=t.value;return e[n]=r,e}),{})}},{key:"setEventListeners",value:function(){var e=this;a(s(f.prototype),"setEventListeners",this).call(this),this._form=this._popupElement.querySelector(".popup__form"),this._form.addEventListener("submit",(function(t){e._handleFormSubmit(t,e._getInputValues())}))}},{key:"close",value:function(){a(s(f.prototype),"close",this).call(this),this._form.reset()}}])&&i(t.prototype,n),f}(r);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._authorization=t.authorization}var t,n;return t=e,(n=[{key:"_parseResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("Произошла ошибка со статус-кодом ".concat(e.status)))}},{key:"sendProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"},body:e}).then((function(e){return t._parseResponse(e)}))}},{key:"sendCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"},body:e}).then((function(e){return t._parseResponse(e)}))}},{key:"getUser",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._parseResponse(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._parseResponse(t)}))}},{key:"deleteCard",value:function(e){var t=this,n=e._id;return fetch("".concat(this._baseUrl,"/cards/").concat(n),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(e){return t._parseResponse(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"},body:e}).then((function(e){return t._parseResponse(e)}))}},{key:"likeCard",value:function(e){var t=this,n=e._id;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"}}).then((function(e){return t._parseResponse(e)}))}},{key:"likeCardDelete",value:function(e){var t=this,n=e._id;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:{authorization:"".concat(this._authorization),"Content-Type":"application/json"}}).then((function(e){return t._parseResponse(e)}))}}])&&f(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._elementsList=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._elementsList.append(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&h(t.prototype,n),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t,this._formElement=n}var t,n;return t=e,(n=[{key:"_getErrorElement",value:function(e){return this._formElement.querySelector(".".concat(e.id,"-error"))}},{key:"_showInputError",value:function(e,t){var n=this._getErrorElement(e);e.classList.add(this._options.inputErrorClass),n.textContent=t,n.classList.add(this._options.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._getErrorElement(e);e.classList.remove(this._options.inputErrorClass),t.classList.remove(this._options.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){var t=this._getErrorElement(e);e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage,t)}},{key:"_toggleButtonState",value:function(){var e=!this._formElement.checkValidity();this._buttonElement.disabled=e,this._buttonElement.classList.toggle(this._options.inactiveButtonClass,e)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._options.inputSelector)),this._buttonElement=this._formElement.querySelector(this._options.buttonElement),this._toggleButtonState(this._formElement,this._buttonElement,this._options.inactiveButtonClass),this._inputList.forEach((function(t){t.addEventListener("input",(function(n){e._checkInputValidity(t)}))})),this._formElement.addEventListener("input",(function(){e._toggleButtonState(e._formElement,e._buttonElement,e._options.inactiveButtonClass)}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&d(t.prototype,n),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._template=n,this._name=t.name,this._link=t.link,this._id=t._id,this.likes=t.likes.length,this._owner=t.owner._id,this._myId=i,this.like=t.likes.some((function(e){return e._id===i})),this._handleLikeCard=a,this._handleCardClick=r,this._handleCardDelete=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._template.content.querySelector(".grid__items").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn=this._element.querySelector(".grid__like"),this._likeBtn.addEventListener("click",(function(t){e._handleLikeCard(t)})),this._deleteCardBtn.addEventListener("click",(function(t){e._handleCardDelete(e._id,e._element)})),this._elementPopupImage=this._element.querySelector(".grid__image"),this._elementPopupImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)}))}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this.element=this._element,this._element.querySelector(".grid__text").textContent=this._name,this._deleteCardBtn=this._element.querySelector(".grid__delete-btn");var e=this._element.querySelector(".grid__image");return e.src=this._link,e.alt=this._name,this._element.querySelector(".grid__number-like").textContent=this.likes,this.like&&this._element.querySelector(".grid__like").classList.add("grid__like_active"),e.src=this._link,e.alt=this._name,this._myId!==this._owner&&this._deleteCardBtn.classList.add("grid__delete-btn_disable"),this._setEventListeners(),this._element}}])&&m(t.prototype,n),e}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e,t){this._imgElement=this._popupElement.querySelector(".popup__image"),this._imgElement.src=e,this._imgElement.alt=t,this._popupElement.querySelector(".popup__image-text").textContent=t,k(C(a.prototype),"open",this).call(this)}}])&&g(t.prototype,n),a}(r);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;j(R(a.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}},{key:"open",value:function(e,t){this.idCard=e,this.elementCard=t,j(R(a.prototype),"open",this).call(this)}}])&&L(t.prototype,n),a}(r),I=document.querySelector(".profile__button-edit"),x=document.querySelector(".popup__input_type_first-name"),U=document.querySelector(".popup__input_type_about-me"),z=document.querySelector("#AddCardForm"),B=document.querySelector("#popupAddCard"),A=document.querySelector("#editForm"),D=document.querySelector("#deleteCard"),V=document.querySelector(".grid"),F=document.querySelector(".profile__button-add"),N=document.querySelector("#popupEdit"),J=document.querySelector("#popupImage"),M=document.querySelector(".grid-template"),H=document.querySelector(".profile__title"),G=document.querySelector(".profile__subtitle"),K=document.querySelector("#deleteCard"),Q=document.querySelector(".profile__avatar"),W=document.querySelector("#newImage"),X=document.querySelector("#newAvatarForm"),Y=document.querySelector(".profile__avatar-btn"),Z={formSelector:".popup__form",inputSelector:".popup__input",buttonElement:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_disable",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function $(e,t,n){e.querySelector(".popup__submit-btn").textContent=n}var ee,te=new t(H,G,Q),ne=new p({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-21",authorization:"f0422778-420b-41b4-a52e-ffa4edcaf604"});function re(e){var t=this;this.like?ne.likeCardDelete({_id:this._id}).then((function(e){t.likes>0&&(t.likes-=1),t.like=!t.like,t.element.querySelector(".grid__number-like").textContent=t.likes,t.element.querySelector(".grid__like").classList.remove("grid__like_active")})).catch((function(e){console.log("Ошибка при удалении лайка",e.message)})):ne.likeCard({_id:this._id}).then((function(e){t.likes+=1,t.like=!t.like,t.element.querySelector(".grid__number-like").textContent=t.likes,t.element.querySelector(".grid__like").classList.add("grid__like_active")})).catch((function(e){console.log("Ошибка при установке лайка",e.message)})),e.stopPropagation()}function oe(e){return new v(e,M,(function(e,t){ae.open(e,t)}),(function(e,t){ie.open(e,t)}),ee,re).generateCard()}var ie=new T(K,(function(){var e=this;$(D,0,"Удаление..."),ne.deleteCard({_id:this.idCard}).then((function(t){e.elementCard.remove(),e.elementCard=null})).catch((function(e){console.log("Ошибка при удалении карточки",e)})).finally((function(){e.close(),$(D,0,"Да")}))}));ie.setEventListeners();var ae=new w(J);ae.setEventListeners();var ue=new l(W,(function(e,t){e.preventDefault(),$(X,0,"Сохранение...");var n=JSON.stringify({avatar:t.link});ne.changeAvatar(n).then((function(e){console.log(e);var t=e.name,n=e.about,r=e.avatar,o=e._id;te.setUserInfo({name:t,about:n,avatar:r,_id:o}),ue.close()})).catch((function(e){console.log(e)})).finally((function(){$(X,0,"Сохранить")}))}));ue.setEventListeners();var ce=new l(N,(function(e,t){e.preventDefault(),$(A,0,"Сохранение...");var n=JSON.stringify({name:t.name,about:t.description});ne.sendProfile(n).then((function(e){console.log(e);var t=e.name,n=e.about,r=e.avatar,o=e._id;te.setUserInfo({name:t,about:n,avatar:r,_id:o}),ce.close()})).catch((function(e){console.log(e)})).finally((function(){$(A,0,"Сохранить")}))}));ce.setEventListeners();var se=new l(B,(function(e,t){e.preventDefault(),$(z,0,"Создание...");var n=JSON.stringify({name:t.name,link:t.link});ne.sendCard(n).then((function(e){var t;console.log(e),t=oe(e),V.prepend(t),se.close()})).catch((function(e){console.log(e)})).finally((function(){$(z,0,"Создать")}))}));se.setEventListeners();var le=new y(Z,X);le.enableValidation();var fe=new y(Z,A);fe.enableValidation();var pe=new y(Z,z);pe.enableValidation(),Y.addEventListener("click",(function(){ue.open(),le.resetValidation()})),I.addEventListener("click",(function(e){ce.open(e);var t=te.getUserInfo(),n=t.name,r=t.description;x.value=n,U.value=r,fe.resetValidation()})),F.addEventListener("click",(function(){se.open(),pe.resetValidation()})),Promise.all([ne.getUser(),ne.getCards()]).then((function(e){var t;te.setUserInfo(e[0]),ee=te.getMyId(),console.log(e),t=e[1],new _({items:t,renderer:function(e){var t;t=oe(e),V.append(t)}},".grid").renderItems()})).catch((function(e){console.log("Ошибка при получении данных",e.message)}))})();