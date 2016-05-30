/**
 * Created by mshat on 29.05.2016.
 */
//Михаил Шатихин
"use strict";

if (Element.prototype.closest === undefined) {

    Element.prototype.closest = function(css) {
        var parent = this.parentNode;
        while(parent) {
            if (parent.matches(css))
                return parent;

            parent = parent.parentNode;
        }

        return null;
    };

}
