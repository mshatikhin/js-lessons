/**
 * Created by mshat on 10.05.2016.
 */
//Михаил Шатихин
//Логирующий декоратор (много аргументов)
'use strict';

function work(a, b) {
    alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
    return function () {
        log.push(Array.from(arguments));
        return f.apply(this, arguments);
    }
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}