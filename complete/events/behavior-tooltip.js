
//http://plnkr.co/edit/X7rc1jRPyTDuP7uTweFp?p=preview


//Михаил Шатихин
'use strict';

var tooltip = document.createElement("div");
tooltip.id = "my-tooltip";
tooltip.className = "my-tooltip hidden";

document.body.appendChild(tooltip);

function onMouseOver(event) {
    if (!event.target.hasAttribute("data-tooltip"))
        return;

    tooltip.innerHTML = event.target.getAttribute("data-tooltip");
    tooltip.classList.remove("hidden");

    var coords = event.target.getBoundingClientRect();

    var tooltipNotContainsTop = coords.top - pageYOffset < tooltip.clientHeight;

    var offsetTop = tooltipNotContainsTop ?
    coords.top + pageYOffset + coords.bottom - coords.top + 5 :
    coords.top - tooltip.clientHeight - 5;

    var tooltipNotContainsLeft = coords.left - pageXOffset < tooltip.clientWidth;

    var offsetLeft = tooltipNotContainsLeft ?
        coords.left :
    coords.left + (event.target.clientWidth / 2);
    if (!tooltipNotContainsLeft) {
        tooltip.classList.add("center");
    }
    tooltip.style.top = `${offsetTop}px`;
    tooltip.style.left = `${offsetLeft}px`;
}

function onMouseOut(event) {
    if (!event.target.hasAttribute("data-tooltip"))
        return;

    tooltip.classList.remove("center");
    tooltip.classList.add("hidden");

    tooltip.style.top = "";
    tooltip.style.left = "";
}

document.addEventListener("mouseover", onMouseOver);
document.addEventListener("mouseout", onMouseOut);