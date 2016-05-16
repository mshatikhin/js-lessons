//Михаил Шатихин
//Хомяки с __proto__
'use strict';

function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function (something) {
    this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert(speedy.food.length); // 2
alert(lazy.food.length); // 2 (!??)