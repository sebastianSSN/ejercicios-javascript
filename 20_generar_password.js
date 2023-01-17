//? Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:
//* Las mayúsculas se reemplazan por minúsculas.
//* Se eliminan los espacios en blanco.
//* Reemplaza el caracter “a” por “4”.
//* Reemplaza el caracter “e” por “3”.
//* Reemplaza el caracter “i” por “1”.
//* Reemplaza el carater “o” por “0”.

//TODO: escribe tu función acá

function password(str) {
  return str
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/a/g, "4")
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/o/g, "0");
}

//! código de prueba
console.log(password("hola")); // "h0l4"
console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
console.log(password("")); // ""
