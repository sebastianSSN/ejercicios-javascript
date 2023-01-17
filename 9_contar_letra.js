//? Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

//TODO: escribe tu respuesta acá
const numeroDeAes = (string) => {
  //* Manera larga usando for
  //! let count = 0;
  //! for (let i = 0; i < string.length; i++) {
  //!   if (string[i] === "a") {
  //!     count++;
  //!   }
  //! }
  //! return count;
  //
  //* Manera corta y sencilla
  return string.split("a").length - 1;
};

//! código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0
