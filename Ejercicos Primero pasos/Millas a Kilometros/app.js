
let km = 20;

//Funcion que convierte kilometros a millas
function km_mi ( km ){
    mi = km *(.62137)
    console.log( km +' kilometros equivalen a '+ mi.toFixed(3)+ 'millas')
}

km_mi( km )