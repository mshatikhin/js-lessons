//Михаил Шатихин
"use strict";
function createCalendar(container, year, month) {

    function addEmptyCell(row) {
        row.appendChild(document.createElement("td")).appendChild(document.createTextNode(" "));
    }

    function addDayCell(row, day) {
        row.appendChild(document.createElement("td")).appendChild(document.createTextNode(day));
    }

    function fillHeader(table) {
        var header = table.createTHead().insertRow(0);
        for (var day of days) {
            header.appendChild(document.createElement("th"))
                .appendChild(document.createTextNode(day));
        }
    }

    function fillBody(table) {
        var firstDayOfMonth = new Date(year, month - 1, 1).getDay();
        var lastNumberDayOfMonth = new Date(year, month, 0).getDate();
        var day = 1;
        var body = document.createElement("tbody");

        for (let i = 0; i < 6; i++) {
            var r = body.insertRow(i);
            if (i === 0) {
                if (firstDayOfMonth === 0) {
                    for (let j = 0; j < 6; j++) {
                        addEmptyCell(r);
                    }
                    addDayCell(r, day++);
                } else {
                    for (let j = 0; j < 7; j++) {
                        if (j < firstDayOfMonth - 1) {
                            addEmptyCell(r);
                        } else {
                            addDayCell(r, day++);
                        }
                    }
                }
            } else {
                for (let j = 0; j < 7; j++) {
                    if (day > lastNumberDayOfMonth) {
                        addEmptyCell(r);
                    } else {
                        addDayCell(r, day++);
                    }
                }
            }
        }

        table.appendChild(body);
    }

    var days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    var table = document.createElement("table");

    fillHeader(table);
    fillBody(table);

    document.getElementById(container)
        .appendChild(table);
}

createCalendar("cal", 2016, 12);