/**
 * Created by mshat on 29.05.2016.
 */
http://plnkr.co/edit/aBwKbqIqau9FO40SMJro?p=preview
//Дерево
//Михаил Шатихин
"use strict";
var li = document.querySelectorAll("ul li");
for (let i = 0; i <= li.length; i++) {
    var countChildLI = li[i].querySelectorAll("li").length;
    if (countChildLI > 0) {
        li[i].firstChild.textContent = li[i].firstChild.textContent.trim() + " [" + countChildLI + "]";
    }
}