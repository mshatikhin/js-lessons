//Михаил Шатихин
//Меню с таймером для анимации

function Menu(state) {
    this._state = state || Menu.STATE_CLOSED;
};

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function () {
    this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function () {
    this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function () {
    switch (this._state) {
        case Menu.STATE_OPEN:
            return 'открыто';

        case Menu.STATE_CLOSED:
            return 'закрыто';
    }
};

Menu.prototype.showState = function () {
    alert(this._stateAsString());
};

function AnimatingMenu() {
    Menu.apply(this, arguments);
}
AnimatingMenu.prototype = Object.create(Menu.prototype); // замените на ваш код для AnimatingMenu
AnimatingMenu.prototype.STATE_ANIMATING = 2;
AnimatingMenu.prototype.open = function () {
    var self = this;

    this._state = this.STATE_ANIMATING;

    this._timer = setTimeout(function () {
        Menu.prototype.open.call(self);
    }, 1000);
};
AnimatingMenu.prototype.close = function () {
    clearTimeout(this._timer);
    Menu.prototype.close.apply(this);
};

AnimatingMenu.prototype._stateAsString = function () {
    switch (this._state) {
        case this.STATE_ANIMATING:
            return 'анимация';
        default:
            return Menu.prototype._stateAsString.call(this);
    }
};

// использование..

var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function () {
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто (закрытие без анимации)
}, 1000);


