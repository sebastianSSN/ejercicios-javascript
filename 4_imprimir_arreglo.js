//? Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

//TODO: escribe tu respuesta acá

/* const imprimirArreglo = (...arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}; */

function imprimirArreglo_forEach(arr) {
  arr.forEach((element) => console.log(element));
}

function imprimirArreglo_map(arr) {
  arr.map((element) => console.log(element));
}

//! código de prueba
console.log("Solucion con forEch");
console.log(imprimirArreglo_forEach([1, "Hola", 2, "Mundo"]));
console.log("Solucion con map");
console.log(imprimirArreglo_map([1, "Hola", 2, "Mundo"]));
// 1
// Hola
// 2
// Mundo
