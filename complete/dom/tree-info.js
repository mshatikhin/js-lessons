/**
 * Created by mshat on 29.05.2016.
 */
http://plnkr.co/edit/WvAzeP0npdqvoxu69rsR?p=preview
//Дерево
'use strict';
var li = document.querySelectorAll("ul li");
for (let i = 0; i <= li.length; i++) {
    const countChildLI = " (" + li[i].querySelectorAll("li").length + ")";
    li[i].firstChild.textContent = li[i].firstChild.textContent.trim() + countChildLI;
    //alert(li[i].firstChild.textContent);
}