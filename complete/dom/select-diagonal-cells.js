/**
 * Created by mshat on 29.05.2016.
 */

http://plnkr.co/edit/YT1vty1aCzOgG16nuClo?p=preview
//Выделите ячейки по диагонали
'use strict';
var table = document.body.children[0];
for (let i = 0; i <= table.rows.length; i++) {
    const td = table.rows[i].cells[i];
    td.style.backgroundColor = 'red';
}