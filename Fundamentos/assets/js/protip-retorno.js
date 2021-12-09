// function crearPersona( nombre, apellido) {
//     return { nombre, apellido }
// }

const crearPersona = (nombre, apellido) => ({ nombre , apellido}); 

const persona = crearPersona( 'Jesus', 'Castellanos' );
console.log( persona.nombre, persona.apellido);


function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log ( {edad,  args} );
    return args;
}

imprimeArgumentos(10, true, false, 'Jesus', 'Hola');
// /const argumentos = imprimeArgumentos2( 10, false, true, 'Alberto', 'Mundo');
// console.log( {argumentos} );

const [casado, vivo, nombre, saludo] = imprimeArgumentos2( 10,10, false, true, 'Alberto', 'Mundo');
console.log({ casado, vivo, nombre, saludo }); // se crea objetocasado, vivo, nombre, saludoare de valores

const { apellido: nuevoApellido } = crearPersona( 'Jesus', 'Castellanos' );
console.log( {nuevoApellido} );

const tony = {
    nombre: 'Tony Stark',
    codeName:'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War',
};

// const imprimePropiedades = (personaje) => {

//     console.log( 'nombre', personaje.nombre );
//     console.log( 'codename',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
    
    console.log({nombre} );
    console.log({codeName} );
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades ( tony );