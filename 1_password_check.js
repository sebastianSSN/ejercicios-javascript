//? Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

//TODO: escribe tu respuesta acá
let password = ["2Fj(jjbFsuj", "eoZiugBf&g9"];

const passwordCheck = (input) => {
  if (password[0] === input || password[1] === input) {
    return true;
  } else {
    return false;
  }
};

//! código de prueba
console.log(passwordCheck("2Fj(jjbFsuj")); // true
console.log(passwordCheck("eoZiugBf&g9")); // true
console.log(passwordCheck("hola")); // false
console.log(passwordCheck("")); // false
