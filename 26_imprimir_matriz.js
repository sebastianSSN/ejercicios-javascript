//? Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.

//TODO escribe tu función acá

const imprimirMatriz = (matriz) => {
  return matriz.forEach(function (subArr) {
    subArr.forEach(function (element) {
      console.log(element);
    });
  });
};

//! código de prueba
console.log(
  imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
