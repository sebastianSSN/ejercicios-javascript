//? Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

//* Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

//TODO: escribe tu función acá

const distancia = (s1, s2) => {
  let diferencia = s1
    .split("")
    .map((c, i) => c !== s2[i])
    .filter((c) => c).length;
  return diferencia + Math.abs(s1.length - s2.length);
};

//! código de prueba
console.log(distancia("hola", "hola")); // 0
console.log(distancia("sol", "tol")); // 1
console.log(distancia("carro", "correr")); // 3
