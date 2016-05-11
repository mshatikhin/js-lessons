/**
 * Created by shatikhin on 05.05.2016.
 */
//Перепишите суммирование аргументов
//Михаил Шатихин
"use strict";
function sumArgs() {
    if (arguments.length === 0) {
        return 0;
    }
    arguments.reduce = [].reduce;
    return arguments.reduce(function (a, b) {
        return a + b;
    });
}

alert(sumArgs(1, 2, 3)); // 6, аргументы переданы через запятую, без массива
alert(sumArgs()); // 0, аргументы переданы через запятую, без массива