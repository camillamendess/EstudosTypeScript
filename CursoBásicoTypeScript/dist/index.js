"use strict";
// Típos Básicos
let age = 5;
const firstName = "Camilla";
const isValid = true;
let idk = 5; // Sem tipagem
idk = "9";
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, true, false];
const names = ["Camilla", "Caio", "Barbara", "Edson"];
// Tupla
const person = [22, "Camilla"]; // Não pode inverter a ordem
// Lista de Tuplas
const people = [
    [1, "Jane"],
    [2, "John Doe"],
    [3, "Caio"],
];
// Instersections
const productId = '1'; // Dualidade de tipos
const tipos = true;
// Enum 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
;
const direction = Direction.Up;
// Types Assertions
const productName = "Mesa";
// let itemId = productName as String;
let itemID = productName;
console.log(age);
