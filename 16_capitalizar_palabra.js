//? Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

//TODO: escribe tu función acá

const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

//! código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""
