//? Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

//TODO: escribe tu respuesta acá

const numeroDeCaracteres = (string, caracter) => {
  //* Manera larga usando for
  //! let count = 0;
  //! for (let i = 0; i < string.length; i++) {
  //!   if (string[i] === caracter) {
  //!     count++;
  //!   }
  //! }
  //! return count;
  //
  //* Manera corta y sencilla
  return string.split(caracter).length - 1;
};

//! código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4
