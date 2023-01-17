//? Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

//* Nota: Intentarlo hacer sin el método Math.min de JavaScript.

//TODO: escribe tu función acá

//* Manera larga como lo pide en la nota
//! const min = (numbers) => {
//!   var currentMin = numbers[0];
//!   for (var i = 1; i < numbers.length; i++) {
//!     if (numbers[i] < currentMin) {
//!       currentMin = numbers[i];
//!     }
//!   }
//!   return currentMin;
//! };
//
//* Manera corta y depurada
const min = (arr) => {
  return Math.min(...arr);
};

//! código de prueba
console.log(min([3, 9, 6])); // 3
console.log(min([67, 35, 54, 26])); // 26
console.log(min([5, 9, 2, 4, 5, 7])); // 2
