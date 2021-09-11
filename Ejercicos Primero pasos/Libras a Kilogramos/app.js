
let libras = 160;

//Funcion que convierte de libras a Kilogramos
function Libras_Kg ( libras ){
    kg = libras / 2.20462262
    console.log('El usuario tene un peso en libras de '+ libras +' y su equivalente en KG es '+ kg.toFixed(3))
}

Libras_Kg( libras )