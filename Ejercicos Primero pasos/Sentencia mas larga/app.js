
let heroes = ['Profesor Charles Xavier3','Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let mayor = 0;
let puntero = 0;

function masLargo( arr ) {    

    for( i = 0 ; i < arr.length ; i++) {
        
        sentencia = arr[i].length;

        if( mayor < sentencia){
            mayor = sentencia;
            puntero = i;                         
        }
                      
    }  
    return arr[puntero];  
}

let heroesLargo = masLargo( heroes );
console.log( heroesLargo ); // Profesor Charles Xavier