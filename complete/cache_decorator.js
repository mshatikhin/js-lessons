/**
 * Created by mshat on 10.05.2016.
 */
//Михаил Шатихин
//Кеширующий декоратор
'use strict';

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    var cache = {};

    return function (value) {
        cache[value] = cache[value] || f.call(this, value);
        return cache[value];
    }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert(a == b); // true (значение закешировано)

b = f(2);
alert(a == b); // false, другой аргумент => другое значение