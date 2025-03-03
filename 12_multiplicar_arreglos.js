//? Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

//TODO: escribe tu respuesta acá

const multiplicarArreglo = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, item) => acc * item);
};

//! código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1
