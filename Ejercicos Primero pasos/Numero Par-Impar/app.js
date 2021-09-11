
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];



//Esta funcion determina si un numero es par o impar
function parImpar ( numeros ){
   
    for(i = 0; i < numeros.length ; i++){
        if( (numeros[i] %  2) == 0){
            console.log('El numero '+ numeros[i] +' es par ')            
        } else{
            console.log('El numero '+ numeros[i] +' es impar ')

        }        
    }
    
    
}

parImpar(numeros)