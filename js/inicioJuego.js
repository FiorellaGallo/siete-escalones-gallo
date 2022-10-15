const getPreguntas = async () => {
    const resp = await
        fetch("../data/preguntas.json")
    const data = await resp.json()
    return (data)
}

let preguntas;
let min = 0;
let max = 39 - 1;
let numeroPregunta = Math.floor(Math.random() * (max - min + 1) + min); // genero numero aleatorio
let jugadores = localStorage.getItem("jugadores");
jugadores = JSON.parse(jugadores);
localStorage.setItem("escalon", 0);
let escalonNum = 0;

window.addEventListener("DOMContentLoaded", async () => {
    preguntas = await getPreguntas();
    const { pregunta, opciones } = preguntas[numeroPregunta]; // accedo por posiciòn dentro array que contiene los objetos pregunta
    let escalon = document.getElementById("escalon");
    escalon.innerHTML = `Escalón : ${escalonNum} `;

    localStorage.setItem("jugadorActual", 1);

    let jugadorhtml = document.getElementById("jugador");
    const { nombreJugador } = jugadores[0];
    jugadorhtml.innerText = `Jugador :${nombreJugador}`;

    const tituloPregunta = document.querySelector("#pregunta");
    tituloPregunta.innerHTML = pregunta;

    const opcion1 = document.querySelector("#opcion1");
    const arrayOpciones = opciones.split(/\r?\n/);
    opcion1.innerHTML = arrayOpciones[0];

    const opcion2 = document.querySelector("#opcion2");
    opcion2.innerHTML = arrayOpciones[1];

    const opcion3 = document.querySelector("#opcion3");
    opcion3.innerHTML = arrayOpciones[2];
    createListener();
});


function createListener() {
    console.log(preguntas);

    let respuesta1 = document.getElementById("opcion1");

    respuesta1.addEventListener("click", (event) => {
        const { respuesta } = preguntas[numeroPregunta];

        console.log("a/", respuesta);
        let jugador = jugadores[localStorage.getItem("jugadorActual") - 1];

        if ("a" == respuesta) {
            respuesta1.style.backgroundColor = "green";
            jugador.preguntaAnterior = true;
        } else {
            respuesta1.style.backgroundColor = "red";
            jugador.preguntaAnterior = false;
            swal({
                title: "¡¡UPS!!",
                text: `Perdiste ${jugador.nombreJugador}`,
                buttons: false,
                timer: 10000,
            });
        }
        jugadores[localStorage.getItem("jugadorActual") - 1] = jugador;
        setTimeout(continuarJuego, 1000);
    });

    let respuesta2 = document.getElementById("opcion2");

    respuesta2.addEventListener("click", (event) => {
        const { respuesta } = preguntas[numeroPregunta];

        console.log("b/", respuesta);
        let jugador = jugadores[localStorage.getItem("jugadorActual") - 1];

        if ("b" == respuesta) {
            respuesta2.style.backgroundColor = "green";
            jugador.preguntaAnterior = true;
        } else {
            respuesta2.style.backgroundColor = "red";
            jugador.preguntaAnterior = false;
            swal({
                title: "¡¡UPS!!",
                text: `Perdiste ${jugador.nombreJugador}`,
                buttons: false,
                timer: 10000,
            });
        }
        jugadores[localStorage.getItem("jugadorActual") - 1] = jugador;
        setTimeout(continuarJuego, 1000);
    });

    let respuesta3 = document.getElementById("opcion3");

    respuesta3.addEventListener("click", (event) => {
        const { respuesta } = preguntas[numeroPregunta];

        console.log("c/", respuesta);
        let jugador = jugadores[localStorage.getItem("jugadorActual") - 1];

        if ("c" == respuesta) {
            respuesta3.style.backgroundColor = "green";
            jugador.preguntaAnterior = true;
        } else {
            respuesta3.style.backgroundColor = "red";
            jugador.preguntaAnterior = false;
            swal({
                title: "¡¡UPS!!",
                text: `Perdiste ${jugador.nombreJugador}`,
                buttons: false,
                timer: 10000,
            });
        }

        jugadores[localStorage.getItem("jugadorActual") - 1] = jugador;
        setTimeout(continuarJuego, 1000);
    });


}

function continuarJuego() {
    let jugadorActual = localStorage.getItem("jugadorActual");
    let perdieron = true;

    for (let index = 0; index <= jugadores.length - 1; index++) {
        console.log("index", index);
        if (jugadores[index].preguntaAnterior == true) {
            if (Number(jugadorActual) === jugadores.length) {
                let numEscalon = localStorage.getItem("escalon");
                localStorage.setItem("escalon", Number(numEscalon) + 1);
                if (Number(numEscalon) + 1 === 8) {
                    swal({
                        title: "FELICITACIONES",
                        text: "¡¡Ganaron todos!!",
                        buttons: false,
                        timer: 10000,
                    });
                    setTimeout(() => {
                        location.replace("/");
                    }, 2000);
                }
                else{
                    swal({
                        title: "ESCALÓN",
                        text: `${Number(numEscalon) + 1}`,
                        buttons: false,
                        timer: 10000,
                    });

                }
            }

            if (index + 1 !== Number(jugadorActual)) {

            if (Number(jugadorActual) === 1) {
                if (jugadores[1].preguntaAnterior){
                    perdieron = false;
                    recargarPregunta(
                        jugadores[index].nombreJugador,
                        jugadores[index].numero
                    );
                    break;
                }
                if (jugadores.length > 2) {

                if (jugadores[2].preguntaAnterior){
                    perdieron = false;
                    recargarPregunta(
                        jugadores[index].nombreJugador,
                        jugadores[index].numero
                    );
                    break;
                }}
            }

            if (Number(jugadorActual) === 2) {
            
              if (jugadores.length > 2) {
                if (jugadores[2].preguntaAnterior){
                    perdieron = false;
                    recargarPregunta(
                        jugadores[index].nombreJugador,
                        jugadores[index].numero
                    );
                    break;
                }
              }

                if (jugadores[0].preguntaAnterior){

            
                    perdieron = false;
                    recargarPregunta(
                        jugadores[index].nombreJugador,
                        jugadores[index].numero
                    );
                    break;
                }
            }

            if (Number(jugadorActual) === 3) {
                if (jugadores[0].preguntaAnterior){
                    perdieron = false;
                    recargarPregunta(
                        jugadores[index].nombreJugador,
                        jugadores[index].numero
                    );
                    break;
                }
                if (jugadores[1].preguntaAnterior){
                    perdieron = false;
                    recargarPregunta(
                        jugadores[index].nombreJugador,
                        jugadores[index].numero
                    );
                    break;
                }
            }

            }
        }
    }

    if (perdieron == true) {
        if (jugadores[jugadorActual - 1].preguntaAnterior === true) {
            swal({
                title: "¡¡FELICITACIONES!!",
                text: "Has ganado",
                buttons: false,
                timer: 10000,
            });
            setTimeout(() => {
                location.replace("/");
            }, 2000);

        } else {
            swal({
                title: "¡¡FIN DEL JUEGO!!",
                text: "Perdieron todos",
                buttons: false,
                timer: 10000,
            });
            setTimeout(() => {
                location.replace("/");
            }, 2000);
        }
    }
}

function recargarPregunta(nombreJugador, numero) {
    let escalonNum = localStorage.getItem("escalon");

    let escalon = document.getElementById("escalon");
    escalon.innerHTML = `Escalón : ${escalonNum} `;

    localStorage.setItem("jugadorActual", numero);
    document.getElementById("jugador").innerHTML = `Jugador :${nombreJugador}`;
    const opcion1 = document.querySelector("#opcion1");
    const opcion2 = document.querySelector("#opcion2");
    const opcion3 = document.querySelector("#opcion3");
    opcion1.style = "";
    opcion2.style = "";
    opcion3.style = "";

    let min = 0;
    let max = preguntas.length - 1;
    numeroPregunta = Math.floor(Math.random() * (max - min + 1) + min);
    const { pregunta, opciones } = preguntas[numeroPregunta];
    const tituloPregunta = document.querySelector("#pregunta");
    tituloPregunta.innerHTML = pregunta;

    const arrayOpciones = opciones.split(/\r?\n/);
    console.log(arrayOpciones);
    opcion1.innerHTML = arrayOpciones[0];

    opcion2.innerHTML = arrayOpciones[1];

    opcion3.innerHTML = arrayOpciones[2];
}

