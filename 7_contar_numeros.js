//? Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

//* Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

//TODO: escribe tu respuesta acá

const contarRango = (num1, num2) => {
  //* Manera larga como lo pide en la nota
  //! count = 0;
  //! for (let i = num1 + 1; i < num2; i++) {
  //!   count++;
  //! }
  //! return count;
  //
  //* Manera corta y sencilla
  return Math.abs(num1 - num2) - 1;
};

//! código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0
