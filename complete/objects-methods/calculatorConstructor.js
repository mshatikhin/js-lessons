/**
 * Created by shatikhin on 04.05.2016.
 */
//Создать Calculator при помощи конструктора
//Михаил Шатихин
"use strict";
function Calculator() {
    this.read = function () {
        this.firstDigit = Number(prompt("Введите первое число"));
        this.secondDigit = Number(prompt("Введите второе число"));
    }

    this.sum = function () {
        return this.firstDigit + this.secondDigit;
    }

    this.mul = function () {
        return this.firstDigit * this.secondDigit;
    }
}

var calculator = new Calculator();
calculator.read();

alert("Сумма=" + calculator.sum());
alert("Произведение=" + calculator.mul());