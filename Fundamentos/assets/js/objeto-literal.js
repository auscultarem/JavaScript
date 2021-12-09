let personaje = {
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

console.log(personaje)
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Latitud', personaje.coords.lat);
console.log('Latitud', personaje.coords['lat']);
console.log('Numero de trajes', personaje.trajes.length);

console.log('Numero de trajes', personaje.trajes);
console.log('Ultimo traje', personaje.trajes[ personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje["ultima-pelicula"]);

// mas detalles

// delete personaje.edad

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

Object.freeze( personaje ) // conjela las propiedades del objeto creado.
personaje.dinero = 100000;
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( {propiedades , valores});

