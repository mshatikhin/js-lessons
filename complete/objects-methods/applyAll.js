/**
 * Created by shatikhin on 05.05.2016.
 */
//Примените функцию к аргументам
//Михаил Шатихин
"use strict";
function applyAll() {
    arguments.splice = [].splice;
    var func = arguments[0];
    return func.apply(null, arguments.splice(1));
}

// Применить Math.max к аргументам 2, -2, 3
alert(applyAll(Math.max, 2, -2, 3)); // 3

// Применить Math.min к аргументам 2, -2, 3
alert(applyAll(Math.min, 2, -2, 3)); // -2

function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}

alert(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
alert(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24