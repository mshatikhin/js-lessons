/**
 * Created by shatikhin on 31.05.2016.
 */
http://plnkr.co/edit/X7rc1jRPyTDuP7uTweFp?p=preview

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

    var offset = tooltipNotContainsTop ?
    coords.top + pageYOffset + coords.bottom - coords.top + 5 :
    coords.top - tooltip.clientHeight - 5;

    tooltip.style.top = `${offset}px`;
    tooltip.style.left = `${coords.left}px`;
}

function onMouseOut(event) {
    if (!event.target.hasAttribute("data-tooltip"))
        return;

    tooltip.classList.add("hidden");

    tooltip.style.top = "";
    tooltip.style.left = "";
}

document.addEventListener("mouseover", onMouseOver);
document.addEventListener("mouseout", onMouseOut);