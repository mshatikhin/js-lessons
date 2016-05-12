//Михаил Шатихин
//Вызов не чаще чем в N миллисекунд
'use strict';

function debounce(f, ms) {
    var isDone = true;
    return function () {
        if (isDone) {
            isDone = false;
            setTimeout(()=> {
                isDone = true;
                return f.apply(this, arguments);
            }, ms);
        }
    }
}

function f() {
    console.log(...arguments);
}

var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout(function () {
    f(3)
}, 100); // игнор (прошло только 100 мс)
setTimeout(function () {
    f(4)
}, 1100); // выполнится
setTimeout(function () {
    f(5)
}, 1500); // игнор