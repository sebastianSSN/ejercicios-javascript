//? Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

//* Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

//TODO: escribe tu respuesta acá

const sumarRango = (numInit, numFin) => {
  //* Manera larga como lo pide en la nota
  //! let suma = 0;
  //! for (let i = numInit; i <= numFin; i++) {
  //!   suma += i;
  //! }
  //! return suma;
  //
  //* Manera corta y sencilla
  return ((numFin + numInit) * (numFin - numInit + 1)) / 2;
};

//! código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0
