//? Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:

//TODO: escribe tu función acá

const numAsteriscos = (matriz) => {
  return matriz.join("").split("*").length - 1;
};

//! código de prueba
console.log(
  numAsteriscos([
    ["*", "", "*"],
    ["", "*", ""],
    ["*", "", "*"],
  ])
); // 5
