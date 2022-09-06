let jugadores2 = document.getElementById("jugadores2");

jugadores2.addEventListener("click", (event) => {
    
    participara(event); 
});


let jugadores3 = document.getElementById("jugadores3");

jugadores3.addEventListener("click", (event) => {
    
    participara(event);
});


let jugadores;
let arrayJugadores = Array();
let arrayPreguntas = retornarPregunta();

function participara(event) {

    for (let index = 1; index <= event.target.value; index++) {
        const nombre = ingresarNombre(index);
        const jugador = new Jugador(nombre, index, undefined, 0);
        arrayJugadores.push(jugador);
        console.log(index);
    }
    console.log(arrayJugadores);
    iniciarJuego();
}


function ingresarNombre(numeroJugador) {
   return prompt(`Ingrese nombre del jugador ${numeroJugador}`);
}


//Iteración de los escalones

function iniciarJuego() {
    let escalon = 0;
    let unaRespuestaCorrecta = false;

    while (escalon <= 7) {
        alert(`Escalón ${escalon}`);
        //Iteración de los jugadores
        for (let index = 0; index < arrayJugadores.length; index++) {
            const jugadorActual = arrayJugadores[index];
            //Preguntas random
            let min = 0;
            let max = arrayPreguntas.length - 1;
            let numeroPregunta = Math.floor((Math.random() * (max - min + 1)) + min);

            if (jugadorActual.preguntaAnterior == true || jugadorActual.preguntaAnterior == undefined) {
                // asigno objeto pregunta segun la posición 
                const preguntaActual = arrayPreguntas[numeroPregunta];
                console.log(jugadorActual);
                const respuesta = prompt(`${jugadorActual.nombreJugador} \n Jugador:${jugadorActual.numero} \n\n ${preguntaActual.pregunta} \n ${preguntaActual.opciones}`);

                if (respuesta == preguntaActual.respuesta) {
                    jugadorActual.preguntaAnterior = true;
                    arrayJugadores[index] = jugadorActual;
                    unaRespuestaCorrecta = true;
                    console.log("Correcto");
                    alert("Correcto! Pasaste al siguiente  escalón");
                }
                else {
                    jugadorActual.preguntaAnterior = false;
                    arrayJugadores[index] = jugadorActual;
                    console.log("incorrecto");
                    alert("Incorrecto \n \n Eliminado del juego");
                }
            }
        }

        if (unaRespuestaCorrecta == false) {
            alert("El juego ha finalizado. Perdieron todos");
            break;
        }
        else {
            unaRespuestaCorrecta = false;
        }
        escalon++;
    }

    arrayJugadores.forEach((jugador) => {

        if (jugador.preguntaAnterior == true) {
            alert(`¡¡FELICITACIONES ${jugador.nombreJugador} !! \n GANASTE EL JUEGO`);
        }
    });
}




