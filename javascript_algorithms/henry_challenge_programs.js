function mayorMenor(numeros) {
  // La función llamada 'mayorMenor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
  // arreglo que contenga el mayor número del arreglo 'numeros' en la posición uno y el menor número del arreglo
  // 'numeros' en la posición cero.
  // Ej:
  // mayorMenor([9, 17, 6, 2, 4]) debe retornar [2, 17]
  // ya que 17 es el número más grande (mayor) dentro del arreglo [9, 17, 6, 2, 4]
  // y 2 es el número más chico (menor) dentro del arreglo [9, 17, 6, 2, 4]

  // Tu código aca:
  let max = Infinity, min = -Infinity, result = [];
  
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] < max ? max = numeros[i]
    : numeros[i] > min ? min = numeros[i]
    : console.log("error");
  }
  result.push(max, min);
  
  return result;
}

function mismaCantidadCaracteres(strings, caracteres) {
  // La función llamada 'mismaCantidadCaracteres', recibe como argumento un arreglo de strings llamado 'strings'
  // y un numero entero llamado 'caracteres'
  // Debe devolver en un array los strings que tengan el numero de caracteres coincidentes con 'caracteres'
  // Ej:
  // mismaCantidadCaracteres(['hi', 'hello', 'ni hao', 'guten tag'], 2) debe retornar ['hi'] ya que 'hi' tiene 2 caracteres
  // mismaCantidadCaracteres(['javascript', 'pedro', 'amigo', 'parque'], 5) debe retornar ['pedro', 'amigo']

  // Tu código aca:
  let result = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length === caracteres) {
      result.push(strings[i]);
    }
  }
  
  return result;
}

function sumaTodosPrimos(array) {
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.
  
  // Tu código aca:
  function esPrimo(num) {  // function from homework
    if (num === 0 || num === 1 || num === 4 || num < 0) return false;
    for (let x = 2; x < num / 2; x++) {
      if (num % x === 0) return false;
    } return true;
  }

  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (esPrimo(array[i]) === true) {
      result += array[i];
    }
  }

  return result;
}

function sumArray(array, n) {
  // La función llamada 'sumArray' recibe como argumento un arreglo de números ordenados llamado 'array' y un número
  // entero llamdo 'n' y debe devolver true si alguna combinación de dos números cualesquiera del arreglo sumados
  // dan n, y devuelva false si ninguna combinación de dos números sumados da como resultado el número n.

  // Ej:
  // sumArray([2,5,7,10,11,15,20], 13)  debería devolver true ya que 2 + 11 = 13
  // sumArray([2,5,7,10,11,15,20], 14)  debería devolver false ya que no es posible sumar 14 con dos números del arreglo
  // Pista: Podes usar bucles/ciclos anidados
  // Aclaración: No es válido sumar el mismo número dos veces
  // Ej:
  // sumArray([2,5,7,10,11,15,20], 4)  Si bien 2 + 2 = 4 no está permitido sumar el mismo número dos veces
  // por lo tanto también debería devolver false en este caso

  // Tu código aca:
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === n && array[i] !== array[j]) {
        result = array[i] + array[j];
      }
    }
  }
  return result !== 0 ? true : false;

};

function agregaPropiedad(amigos, propiedad) {
  // La funcion llamada 'agregaPropiedad' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que puede tener como propiedades 'nombre' o 'edad'. También
  // recibe un string llamado 'propiedad'.
  // Esta funcion debe agregar la propiedad 'propiedad' y setearla en null a aquellos objetos dentro de 'amigos' que no tengan esa propiedad
  // Debe devolver el array 'amigos' modificado.
  // Nota: Si el objeto dentro de 'amigos' tiene esa 'propiedad' no modificarla.
  // Ej:
  // var amigos = [{ nombre: 'toni' } , { nombre: 'Emi', edad: 25 }];
  // agregaPropiedad(amigos, 'edad') debe devolver [{ nombre: 'toni', edad: null } , { nombre: 'Emi', edad: 25 }]
  
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i][propiedad] === undefined ) {
      amigos[i][propiedad] = null;
    }
  }
  return amigos;

}