//Михаил Шатихин
//Алгоритм для поиска
'use strict';

var head = {
    glasses: 1
};

var table = {
    pen: 3,
    __proto__: head
};

var bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

var pockets = {
    money: 2000,
    __proto__: bed
};

/*
 Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.
 То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.
 После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.
 */

//alert(pockets.pen);
//alert(bed.glasses);
//alert(table.money);

var first = performance.now();
pockets.glasses;
var s1 = first - performance.now();

var second = performance.now();
head.glasses;
var s2 = second - performance.now();

alert("pockets.glasses: " + s1 + '\n и head.glasses: ' + s2);