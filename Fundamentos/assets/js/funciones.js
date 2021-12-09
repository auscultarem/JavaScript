
function saludar( nombre) {
    // console.log( arguments );
    // console.log('Hola ' + nombre);
    return [1, 2, 3, 4, 5];
    // Esto nunca se va a ejecutar
    console.log('Soy un codigoque esta despues del return');
}

const saludar2 = function( nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = ()=> {
    console.log('Hola flecha');
}

const saludarFlecha2 = ( nombre )=> {
    console.log('Hola ' + nombre);
}

// saludar();
// saludar2();
// saludar('Jesus');
// saludar2('Alberto');

const retornoDeSaludar = saludar('Jesus', 37, true, 'Mexico');
// console.log({ retornoDeSaludar });
console.log( retornoDeSaludar );

// saludarFlecha();
// saludarFlecha2('Jesus alberto');

function sumar ( a ,b ) {
    return a + b ;
}

// const sumar2 = ( a, b) => {
//     return a + b;
// }

// la declaracion de arriba se puede definir de la siguiente manera
const sumar2 = ( a, b) => a + b;

console.log( sumar (1 ,2) );
console.log( sumar2 (3, 4) );

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio() );
console.log( getAleatorio2() );
