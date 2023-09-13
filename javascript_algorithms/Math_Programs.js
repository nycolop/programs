function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return Math.pow(num, exponent);   //Math.pow se encarga de los exponentes.
}

function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num % 2 == 0) {
        return false;
    }
    else {
        return true;
    }
}

function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}


function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    return alto * ancho;
}


function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    return lado * 4;
}


function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    return base * altura / 2;
}


function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    const dolar = 1.20;
    return euro * dolar;
}


function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //Escribe tu código aquí
    let vocales = /a|e|i|o|u/;
    if (letra.length > 1) {
        return "Dato incorrecto";
    } else if (vocales.test(letra) === true) {
        return "Es vocal";
    } else {
        return "No es una vocal";
    }
}