//? Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.

//TODO: escribe tu función acá

function posiciones(arr) {
  return arr.map((e, i) => i).filter((value, index) => arr[index] % 2 === 0);
}

//! código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])); //[1, 3, 5]
console.log(posiciones([])); //[]
