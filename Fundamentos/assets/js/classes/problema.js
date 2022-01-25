
// forma de trabajo de navegadores web muy viejos
function Persona(nombre, edad) {
        console.log('Se ejecuto esta linea');

        this.nombre = nombre;
        this.edad = edad;

        this.imprimir = function() {
            console.log(`Nombre: ${ this.nombre}  - edad: ${ this.edad }`);
        }
}

const maria = new Persona('Maria', 18); // la palabra new es para crear una nueva instancia.
const melissa = new Persona('Melissa', 35);
// console.log( maria );
maria.imprimir();
melissa.imprimir();
