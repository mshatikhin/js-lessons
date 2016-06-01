/**
 * Created by shatikhin on 01.06.2016.
 */
//http://plnkr.co/edit/DYo8zCHA2biWNOVD9Cx0?p=preview

//Михаил Шатихин
'use strict';
document.addEventListener("click", function(event) {
    var target = event.target;
    if (target.tagName === "LI") {

        if (event.shiftKey) {
            var items = target.parentNode.children;
            var selectedElementsIndexes = [];
            var selectedElements = target.parentNode.querySelectorAll(".selected");

            for (let i = 0; i <= selectedElements.length; i++) {
                var index = Array.prototype.indexOf.call(items, selectedElements[i]);
                if (index !== -1) {
                    selectedElementsIndexes.push(Number(index));
                }
            }

            var indexOfSelected = Array.prototype.indexOf.call(items, target);
            var indexOfFirstSelected = Math.max(...selectedElementsIndexes);

            if (indexOfFirstSelected < indexOfSelected) {
                for (let i = indexOfFirstSelected; i <= indexOfSelected; i++) {
                    items[i].classList.add("selected");
                }
            } else {
                for (let i = indexOfFirstSelected; i >= indexOfSelected; i--) {
                    items[i].classList.add("selected");
                }
            }

        } else if (event.ctrlKey || event.metaKey) {
            target.classList.toggle("selected");
        } else {
            var items = target.parentNode.children;

            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove("selected");
            }
            target.classList.add("selected");
        }
    }
});