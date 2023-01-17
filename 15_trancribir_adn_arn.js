//? Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

//* Los complementos son los siguientes:
//* G -> C
//* C -> G
//* T -> A
//* A -> U

//TODO: escribe tu función acá

const transcribir = (cadenaADN) => {
  return cadenaADN.replace(/[GCTA]/g, function (nucleotido) {
    switch (nucleotido) {
      case "G":
        return "C";
      case "C":
        return "G";
      case "T":
        return "A";
      case "A":
        return "U";
      default:
        throw new Error("Caracter invalido en la cadena de ADN");
    }
  });
};

//! código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"
