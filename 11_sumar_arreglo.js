//? Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

//TODO: escribe tu respuesta acá

const sumarArreglo = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, item) => acc + item);
};

//! código de prueba
console.log(sumarArreglo([3, 1, 2])); // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumarArreglo([])); // 0
