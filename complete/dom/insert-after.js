//Михаил Шатихин
"use strict";
function insertAfter(elem, refElem) {
    var parentNode = refElem.parentNode;
    var sibling = refElem.nextSibling;
    if (sibling) {
        return parentNode.insertBefore(elem, sibling);
    } else {
        return parentNode.appendChild(elem);
    }
}