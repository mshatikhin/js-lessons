/**
 * Created by shatikhin on 05.05.2016.
 */
//Добавить get/set-свойства
//Михаил Шатихин
"use strict";
function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        firstName: {
            get: function () {
                return this.fullName.split(" ")[0];
            },
            set: function (firstName) {
                this.fullName = firstName + " " + this.lastName;
            }
        },
        lastName: {
            get: function () {
                return this.fullName.split(" ")[1];
            },
            set: function (lastName) {
                this.fullName = this.firstName + " " + this.lastName;
            }
        }
    })
};

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
alert(vasya.firstName); // Василий
alert(vasya.lastName); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert(vasya.fullName); // Василий Сидоров