/**
 * Created by mshat on 29.05.2016.
 */
//Михаил Шатихин
"use strict";
if (Element.prototype.matches === undefined) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
}