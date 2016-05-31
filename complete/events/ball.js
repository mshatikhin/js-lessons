/**
 * Created by shatikhin on 31.05.2016.
 */
//http://plnkr.co/edit/oWheGnfvJiwYmYDmPjee?p=preview

//Михаил Шатихин
'use strict';
var field = document.getElementById("field");
var ball = document.getElementById("ball");

field.addEventListener("click", function (event) {

    var coords = field.getBoundingClientRect();

    var ballTop = event.clientY - coords.top;
    var ballLeft = event.clientX - coords.left;

    //сломал мозг)
    if (ballTop <= ball.clientHeight) {
        ballTop = ball.clientHeight / 2;
    }

    if (ballTop + ball.clientHeight > coords.bottom - coords.top) {
        ballTop = coords.bottom - coords.top - ball.clientHeight;
    }

    if (ballLeft <= ball.clientWidth) {
        ballLeft = ball.clientHeight / 2;
    }

    if (ballLeft + ball.clientWidth > coords.right - coords.left) {
        ballLeft = coords.right - coords.left - ball.clientWidth;
    }

    ball.style.top = ballTop + "px";
    ball.style.left = ballLeft + "px";

});