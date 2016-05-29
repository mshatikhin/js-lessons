//Михаил Шатихин
"use strict";
function createTree(container, data) {

    function buildTree(data) {

        if (Object.keys(data).length === 0)
            return;

        var ul = document.createElement("ul");

        for (var prop in data) {
            var li = document.createElement("li");
            li.innerHTML = prop;
            ul.appendChild(li);
            var childTree = buildTree(data[prop]);
            if (childTree) {
                ul.appendChild(childTree);
            }
        }

        return ul;
    }

    container.appendChild(buildTree(data));
}

var container = document.getElementById('container');
createTree(container, data); // создаёт