let cantidadParticipantes= 0;
let jugadores2 = document.getElementById("jugadores2");

jugadores2.addEventListener("click", (event) => {
    cantidadParticipantes= 2;
    escribirNombres();
    participara(event);
});


let jugadores3 = document.getElementById("jugadores3");

jugadores3.addEventListener("click", (event) => {
    cantidadParticipantes= 3;
    escribirNombres();
    participara(event);
});

function escribirNombres() {
    document.getElementById('nombres').style.display = 'block';
    document.getElementById('botonJugadores').style.display = 'none';
}

let jugadores;
let arrayJugadores = Array();
let arrayPreguntas = retornarPregunta();

function participara(event) {

    for (let index = 1; index <= event.target.value; index++) {
        const divInput = document.getElementById('divInput');
        const div = document.createElement('div');
        divInput.appendChild(div);
        div.innerHTML = `<input type="text" id="jugador${index}" class="form-control" placeholder="${index}º jugador" aria-label="Nombre">`;
    }
    let aceptar = document.getElementById("aceptar");

    aceptar.addEventListener("click", () => {
        
        for (let index = 1; index <= cantidadParticipantes; index++){
            const input= document.getElementById(`jugador${index}`)
            const jugador = new Jugador(input.value, index, undefined, 0);
            arrayJugadores.push(jugador);    
        }
        //iniciarJuego()

    });

    console.log(arrayJugadores);
    
}


/*function iniciarJuego() {
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

*/




