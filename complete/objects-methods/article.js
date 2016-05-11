/**
 * Created by shatikhin on 05.05.2016.
 */
//Счетчик объектов
//Михаил Шатихин
"use strict";
function Article() {
    this.created = new Date();
    Article.created = this.created;
    Article.counter++;
    Article.showStats = function () {
        alert("Всего: " + Article.counter + ", Последняя: " + Article.created);
    };
}
Article.counter = 0;

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)