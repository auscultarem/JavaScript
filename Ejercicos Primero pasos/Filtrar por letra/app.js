let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

function filtrarPorLetra( arr, letra){
    
    let arr1 = [];

    for( i = 0; i < arr.length; i++){
        let sentencia = arr[i];
        let nLetra = sentencia[0];  

        if( nLetra == letra){

            arr1.push(arr[i]);
            //console.log(arr1);

        }
    }
    return arr1;
}



let heroesCon = filtrarPorLetra( heroes, 'S'); 
console.log( heroesCon ); // She Hulk, Spiderma