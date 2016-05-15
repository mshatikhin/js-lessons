//Михаил Шатихин
//Добавить функциям defer с аргументами
'use strict';

Function.prototype.defer = function (ms) {
    var func = this;
    return function () {
        var _this = this;
        var args = arguments;
        setTimeout(function () {
            func.apply(_this, args);
        }, ms);
    }
};

function f(a, b) {
    alert(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.