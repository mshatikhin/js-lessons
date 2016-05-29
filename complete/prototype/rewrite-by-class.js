//Михаил Шатихин
//Перепишите в виде класса
'use strict';

function CoffeeMachine(power) {
    this._waterAmount = 0;
    this._power = power;
}

CoffeeMachine.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype.getTimeToBoil = function () {
    return this._waterAmount * CoffeeMachine.WATER_HEAT_CAPACITY * 80 / this._power;
}

CoffeeMachine.prototype.run = function () {
    setTimeout(function () {
        alert('Кофе готов!');
    }, this.getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function (amount) {
    this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();