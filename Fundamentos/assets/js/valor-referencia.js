
// Primitivos se pasan por valor
let a = 10;
let b = a;

a = 30;

console.log({ a , b });
// En javascript todo los objetos se pasan por referencia.
// los objetos se pasan por referencia
let juan = { nombre: 'Juan' };
// let ana = juan; // al asignar el objeto de esta forma se modifica
let ana = { ...juan }; // al asignar el objeto de esta forma no se modifica

ana.nombre = 'Ana';

console.log({ juan, ana });

// la expresion { ...obj } libera al objeto de su valor de referencia
const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre : 'Peter'};
let tony = cambiaNombre( peter );

console.log({ peter, tony });

// Arreglos

const frutas = ['Manzana', 'Pera', 'Pina'];
// const otrasFrutas = [...frutas]; // operador spread separa los objetos
// const otrasFrutas = frutas.slice(); // otra forma de operar

// Como evaluar de cual de las dos formas es mejor
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table( { frutas, otrasFrutas } );