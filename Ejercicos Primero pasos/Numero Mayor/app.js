
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

let mayor = 0;

//Esta funcion determina el numero mayor en un arreglo
function numeroMayor ( numeros ){
   
    for(i = 0; i < numeros.length ; i++){
        if( mayor < numeros[i] ){
            mayor = numeros[i];
        }         
    }
    console.log('El numero mayor del arreglo es '+ mayor)
    
}

numeroMayor(numeros)