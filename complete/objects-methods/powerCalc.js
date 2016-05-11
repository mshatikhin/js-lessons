//Создайте калькулятор
//Михаил Шатихин
"use strict";
function Calculator() {
    this["+"] = function (a, b) {
        return Number(a) + Number(b);
    }

    this["-"] = function (a, b) {
        return Number(a) - Number(b);
    }

    this.calculate = function (str) {
        var s = str.split(" ");
        if (s.length < 3) {
            alert("Ошибка формата. Число операция Число.");
            return;
        }
        var operation = s[1];
        var firstOperand = Number(s[0]);
        var secondOperand = Number(s[2]);

        var func = this[operation];
        if (func == null) {
            alert("Не найдена подходящая функция." + operation);
            return;
        }
        if (isNaN(firstOperand) || isNaN(secondOperand)) {
            alert("Аргументы функции не являются числами.");
            return;
        }
        return func(firstOperand, secondOperand);
    }

    this.addMethod = function (name, func) {
        return this[name] = func;
    }
}

var powerCalc = new Calculator;
powerCalc.addMethod("*", function (a, b) {
    return a * b;
});
powerCalc.addMethod("/", function (a, b) {
    return a / b;
});
powerCalc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});

var result1 = powerCalc.calculate("2 **f 3");
var result2 = powerCalc.calculate("fa2 ** 3s");

var result3 = powerCalc.calculate("2 ** 3");
alert(result3); // 8

var result4 = powerCalc.calculate("4 / 2");
alert(result4); // 2