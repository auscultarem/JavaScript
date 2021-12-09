/**
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 * 
 */

/*Patron modulo: funcion anonima autoinvocada*/
const miModulo = (() =>{
	'use strict' /*Es un patron que me ayudara a codificar de una forma mas limpia*/
	
	let deck 		  = [];
	const tipos 	  = ['C', 'D', 'H', 'S'],
		  especiales  = ['A', 'J', 'Q', 'K'];

	let puntosJugadores = [];
	

	// Referencias del HTML
	const btnPedir 				= document.querySelector("#btnPedir"),
	 	  puntosHTML 			= document.querySelectorAll("small"),
		  btnDetener			= document.querySelector("#btnDetener");

	const divCartasJugadores	= document.querySelectorAll('.divCartas'),	
	      btnNuevo				= document.querySelector("#btnNuevo");

	const divCartasJugador      = document.querySelector("#jugador-cartas"),
	      divCartasComputadora  = document.querySelector("#computadora-cartas");


	 // Se llama a la funcion y se inicializa el juego
	const inicializarJuego = ( numJugadores = 2 ) => {
		deck = crearDeck();
		puntosJugadores = [];

		for( let i = 0; i < numJugadores; i++) {
			puntosJugadores.push(0);
		}

		puntosHTML.forEach( elem => elem.innerText = 0);
		divCartasJugadores.forEach( elem => elem.innerHTML = "");
		
		
		const imgCartaGrey = document.createElement("img");
		imgCartaGrey.src = `assets/cartas/grey_back.png`;
		imgCartaGrey.classList.add("carta");
		divCartasJugador.append( imgCartaGrey );

		const imgCartaRed = document.createElement("img");
		imgCartaRed.src = `assets/cartas/red_back.png`;
		imgCartaRed.classList.add("carta");
		divCartasComputadora.append( imgCartaRed );

		btnPedir.disabled = false;
		btnDetener.disabled = false;
		
	}

	// Esta funcion Crea una baraja
	const crearDeck = () => {

		deck = [];

		for( let i = 2; i <= 10; i++){
				// deck.push( i + 'C' );
				for(let tipo of tipos){
					deck.push( i + tipo);
				}	
		}	

		for ( let tipo of tipos){
			for( let esp of especiales) {
				deck.push( esp + tipo );
			}
		}
		// console.log( deck );
		return _.shuffle(deck);
		// console.log(deck);
		
	}

	

	// Esta funcion me permite tomar una carta

	const pedirCarta = () => {
		
		if (deck.length === 0) {
			throw 'No hay cartas en el deck'; // Muestra un error
		} 
		return deck.pop();				
			
	}



	const valorCarta = ( carta ) => {
		const valor = carta.substring( 0, carta.length - 1); // para separar los valores de la carta.
		return ( isNaN( valor ) ) ?
							(valor === 'A') ? 11: 10
						: valor * 1;		
	}

	// Tunro : 0 = primer jugador y el ultimosera la computadora
	const acumularPuntos = ( carta, turno ) =>{

		puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
		puntosHTML[turno].innerText = puntosJugadores[turno];
		return puntosJugadores[turno];
	}

	const crearCarta =(carta, turno) => {
		const imgCarta = document.createElement("img");
		imgCarta.src = `assets/cartas/${ carta }.png`; // 3H, JD
		imgCarta.classList.add("carta");
		divCartasJugadores[turno].append( imgCarta );
		
	}

	const determinarGanador = () => {

		const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

		setTimeout ( () => {
		
			if ( puntosMinimos === puntosComputadora ) {
				alert('Esto es un Empate');
			}else if ( puntosMinimos > 21) {
				alert('La computadora Gano!!!');
			} 
			else if (( puntosComputadora >  21 ) ){
				alert('Jugador Gana');
			} else {
				alert("La  Computadora Gano");
			}
	}, 100 );

	}

	//Turno de la Computadora
	const turnoComputadora = ( puntosMinimos ) => {
		let puntosComputadora = 0;
		
		do {
				const carta = pedirCarta();
				let turno = puntosJugadores.length - 1;

				puntosComputadora = acumularPuntos(carta, turno ); 
				crearCarta( carta, turno);				
				

		} while( (puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );
	
		determinarGanador();
	}


	// Eventos
	btnPedir.addEventListener('click', ()=> {
		const carta = pedirCarta();	
		const puntosJugador = acumularPuntos( carta, 0 );

		crearCarta( carta, 0);


		if ( puntosJugador > 21) {
			console.warn('Lo siento mucho, perdiste');
			btnPedir.disabled = true;
			btnDetener.disabled = true;
			turnoComputadora( puntosJugador );

		}else if ( puntosJugador === 21) {
			console.warn('21, Muy bien!!');
			btnPedir.disabled = true;
			btnDetener.disabled = true;
			turnoComputadora( puntosJugador );
		} 

	});

	btnDetener.addEventListener('click', () => {
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora( puntosJugadores[0] );
		
	});

	btnNuevo.addEventListener('click', () =>{
		
		console.clear();
		inicializarJuego();		

	});

	return {
		nuevoJuego : inicializarJuego
	};

}) ();