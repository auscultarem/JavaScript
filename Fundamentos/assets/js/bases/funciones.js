
function saludar( nombre ) {
    // console.log( arguments );
    // console.log('Hola ' + nombre );
    return [1,2];

    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return');
}

const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre );
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre );
}



const retornoDeSaludar = saludar( 'Fernando', 40, true, 'Costa Rica' ); // 1

// saludar2( 'Fernando' );

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar( a, b ) {
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }
const sumar2 = (a,b) => a + b;

function getAleatorio() {
    return Math.random();
}

// En una función de flecha, que no tenga llaves { }
// getAleatorio2()
const getAleatorio2 = () => Math.random();


console.log(  getAleatorio2()   );
let nombre = "Jesus"

let multilinea = `<h1 class="algo">${nombre}</h1><p>Hola Mundo</p>`;
console.log( multilinea );


/*Temlate con tags */
function etiqueta( literales, ...substituciones){
    let resultado = "";

    console.log(literales);
    console.log(substituciones);

    for( let i = 0; i < substituciones.length; i++){

        resultado += literales[i];
        resultado += substituciones[i];
    }

    return resultado;
}

let unidades = 5,
    costo_unitario = 10;

let mensaje = etiqueta `${unidades} lapices cuestan ${unidades * costo_unitario} pesos.`;
console.log( mensaje );
