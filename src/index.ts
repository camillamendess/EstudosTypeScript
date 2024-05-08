// Típos Básicos
let age: number = 5;
const firstName: string = "Camilla";
const isValid: boolean = true;
let idk: any = 5; // Sem tipagem

idk = "9";
idk = true;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, true, false];
const names: string[] = ["Camilla", "Caio", "Barbara", "Edson"];

// Tupla
const person: [number, string] = [22, "Camilla"]; // Não pode inverter a ordem

// Lista de Tuplas
const people: [number, string][] = [
  [1, "Jane"],
  [2, "John Doe"],
  [3, "Caio"],
];

// Instersections
const productId: String | number = '1'; // Dualidade de tipos
const tipos: String | boolean | number = true;

// Enum 
enum Direction {
  Up = 1,
  Down = 2,
};

const direction = Direction.Up;

// Types Assertions


console.log(age);