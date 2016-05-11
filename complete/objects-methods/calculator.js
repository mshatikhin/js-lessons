/**
 * Created by shatikhin on 04.05.2016.
 */
//Создайте калькулятор
//Михаил Шатихин
"use strict";
var calculator = {
    read: function () {
        this.firstDigit = Number(prompt("Введите первое число"));
        this.secondDigit = Number(prompt("Введите второе число"));
    },
    sum: function () {
        return this.firstDigit + this.secondDigit;
    },
    mul: function () {
        return this.firstDigit * this.secondDigit;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());