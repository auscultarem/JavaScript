
class Persona{
    
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias'; // Instancia = Objeto
    }

    static mensaje () {
        console.log( this.nombre );
        console.log('Hola a todos, soy un metodo statico');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre='Sin nombre', codigo='Sin codigo', frase='Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++; // de esta forma puedo conocer cuenats instancias tengo de mi clase.
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${ this.comida}`;
    }

    quiensoy(){
        console.log(`Soy ${ this.nombre} y i identidad es  ${ this.codigo }`);
    }

    miFrase(){
        this.quiensoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }

}

const spiderman = new Persona('Perter parker', 'Spiderman', 'soy un Super Heroe');
const ironman = new Persona('Tony Strak', 'Ironman', 'Yo soy Ironman');
console.log( spiderman );
console.log( ironman );

// spiderman.quiensoy();
// ironman.quiensoy();
spiderman.miFrase();
ironman.miFrase();

spiderman.setComidaFavorita = 'El pay de cereza de la tia May';
// spiderman.nemesis = 'Duende verde';

console.log( spiderman.getComidaFavorita );
console.log( spiderman );

// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();