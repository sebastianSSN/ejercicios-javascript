//? Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

//TODO: escribe tu función acá

function capitalizar(str) {
  if (str.length === 0) return "";
  let palabras = str.split(" ");
  const capitalizadas = palabras.map(function (palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1);
  });
  return capitalizadas.join(" ");
}

//! código de prueba
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar("")); // ""
