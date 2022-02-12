
( () => {
const divdice = document.querySelectorAll(".dice");
const divRefresh = document.querySelector("h1");


    const crearCara = () =>{
        
    cara1 = Math.floor(Math.random() * 6) + 1; 
    cara2 = Math.floor(Math.random() * 6) + 1;

    const imgCarta1 = document.createElement("img");
    imgCarta1.src = `images/dice${cara1}.png`;
    divdice[0].append( imgCarta1 );

    const imgCarta2 = document.createElement("img");
    imgCarta2.src = `images/dice${cara2}.png`;
    divdice[1].append( imgCarta2 );
    
    determinarGanador(cara1, cara2);
        
    }


    const determinarGanador = ( player1 , player2 ) => {
        
        if( player1 > player2) {
            divRefresh.innerText ="Player1 Wins";
        } else if (player1 < player2) {
            divRefresh.innerText ="Players 2 Wins";
        } else {
            divRefresh.innerText = "Draw!!"
        }
        

    }

    crearCara();
}) ();