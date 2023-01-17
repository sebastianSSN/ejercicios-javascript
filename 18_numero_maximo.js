//? Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

//* Nota: Intentarlo hacer sin el método Math.max de JavaScript.

//TODO: escribe tu función acá

//* Manera larga como lo pide en la nota
//! const maxnum = (numbers) => {
//!     var currentMax = numbers[0];
//!     for (var i = 1; i < numbers.length; i++) {
//!         if (numbers[i] > currentMax) {
//!             currentMax = numbers[i];
//!         }
//!     }
//!     return currentMax;
//! }
//
//* Manera corta y depurada
const maxnum = (arr) => {
  return Math.max(...arr);
};

//! código de prueba
console.log(maxnum([3, 9, 6])); // 9
console.log(maxnum([67, 35, 54, 26])); // 67
console.log(maxnum([5, 9, 2, 4, 5, 7])); // 9
