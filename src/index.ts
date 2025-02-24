// import { add, subtract } from "./maths.js";
import { Calculator } from "./maths.js";

// console.log(`Hello World!`);

// console.log(add(5,3)); // output 8
// console.log(subtract(10,6)); // output 4

const calc = new Calculator();

console.log(calc.add(10,5)); // output to be 15
console.log(calc.subtract(20,8)); // output to be 12
