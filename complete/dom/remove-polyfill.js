//Михаил Шатихин
"use strict";
if (Element.prototype.remove === undefined) {

    Element.prototype.remove = function () {
        var parent = this.parentNode;
        if (parent) {
            parent.removeChild(this);
        }
    };

}