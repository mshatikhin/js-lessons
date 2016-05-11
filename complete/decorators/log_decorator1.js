/**
 * Created by mshat on 10.05.2016.
 */
//Михаил Шатихин
//Логирующий декоратор (1 аргумент)
'use strict';

function work(a) {
    /* ... */ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
    return function () {
        log.push(arguments[0]);
        return f.apply(this, arguments);
    }
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
    alert('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
}