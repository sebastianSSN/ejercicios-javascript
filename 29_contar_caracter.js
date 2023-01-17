//? Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:

//TODO: escribe tu función acá

function numAsteriscos(arr) {
  return arr.filter((x) => x === "*").length;
}

//! código de prueba
console.log(numAsteriscos(["", "*", "", "*"])); // 2
console.log(numAsteriscos(["*", "*", "*"])); // 3
//console.log(numAsteriscos([])); // 0
