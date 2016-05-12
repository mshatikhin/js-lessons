/**
 * Created by shatikhin on 12.05.2016.
 */
//Михаил Шатихин
//Тормозилка
'use strict';

function throttle(f, ms) {
    var timer = null;
    var isWait = false;
    return function () {
        if (isWait) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                isWait = false;
                return f.apply(this, arguments);
            }, ms);
        } else {
            isWait = true;
            return f.apply(this, arguments);
        }
    }
}

var f = function () {
    console.log(...arguments);
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется