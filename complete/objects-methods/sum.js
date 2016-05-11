/**
 * Created by shatikhin on 04.05.2016.
 */
//Сумма произвольного количества скобок
//Михаил Шатихин
"use strict";
function sum(a) {
    var fullSum = Number(a);
    var nextSum = function (b) {
        fullSum += Number(b);
        return nextSum;
    };
    nextSum.toString = function () {
        return fullSum;
    }
    return nextSum;
}

alert(sum(1)(2) == 3); // 1 + 2
alert(sum(1)(2)(3) == 6); // 1 + 2 + 3
alert(sum(5)(-1)(2) == 6);
alert(sum(6)(-1)(-2)(-3) == 0);
alert(sum(0)(1)(2)(3)(4)(5) == 15);