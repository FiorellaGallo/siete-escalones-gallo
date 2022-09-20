let preguntas = retornarPregunta();
let min = 0;
let max = preguntas.length - 1;
let numeroPregunta = Math.floor(Math.random() * (max - min + 1) + min); // genero numero aleatorio
let jugadores = localStorage.getItem("jugadores");
jugadores = JSON.parse(jugadores);
localStorage.setItem("escalon", 0);
let escalonNum = 0;

window.addEventListener("load", function () {
    const{pregunta,opciones,respuesta} = preguntas[numeroPregunta]; // accedo por posiciòn dentro array que contiene los objetos pregunta
    let escalon = document.getElementById("escalon");
    escalon.innerHTML = `Escalón : ${escalonNum} `;

    localStorage.setItem("jugadorActual", 1);

    let jugadorhtml = document.getElementById("jugador");
    const {nombreJugador } = jugadores[0];
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

    let respuesta1 = document.getElementById("opcion1");

    respuesta1.addEventListener("click", (event) => {
        let jugador = jugadores[localStorage.getItem("jugadorActual") - 1];

        if ("a" == respuesta) {
            respuesta1.style.background = "green";
            jugador.preguntaAnterior = true;
        } else {
            respuesta1.style.background = "red";
            jugador.preguntaAnterior = false;
        }
        jugadores[localStorage.getItem("jugadorActual") - 1] = jugador;
        setTimeout(continuarJuego, 1000);
    });

    let respuesta2 = document.getElementById("opcion2");

    respuesta2.addEventListener("click", (event) => {
        let jugador = jugadores[localStorage.getItem("jugadorActual") - 1];

        if ("b" == respuesta) {
            respuesta2.style.background = "green";
            jugador.preguntaAnterior = true;
        } else {
            respuesta2.style.background = "red";
            jugador.preguntaAnterior = false;
        }
        jugadores[localStorage.getItem("jugadorActual") - 1] = jugador;
        setTimeout(continuarJuego, 1000);
    });

    let respuesta3 = document.getElementById("opcion3");

    respuesta3.addEventListener("click", (event) => {
        let jugador = jugadores[localStorage.getItem("jugadorActual") - 1];

        if ("c" == respuesta) {
            respuesta3.style.background = "green";
            jugador.preguntaAnterior = true;
        } else {
            respuesta3.style.background = "red";
            jugador.preguntaAnterior = false;
        }

        jugadores[localStorage.getItem("jugadorActual") - 1] = jugador;
        setTimeout(continuarJuego, 1000);
    });
});

function continuarJuego() {
    let jugadorActual = localStorage.getItem("jugadorActual");
    let perdieron = true;

    for (let index = 0; index <= jugadores.length - 1; index++) {
        if (jugadores[index].preguntaAnterior == true) {
            if (Number(jugadorActual) === jugadores.length) {
                let numEscalon = localStorage.getItem("escalon");
                localStorage.setItem("escalon", Number(numEscalon) + 1);
            }

            if (index + 1 !== Number(jugadorActual)) {
                console.log(jugadorActual);
                console.log("Suma de index + 1", index + 1);
                console.log(jugadores[index]);
                perdieron = false;
                recargarPregunta(
                    jugadores[index].nombreJugador,
                    jugadores[index].numero
                );
                break;
            }
        }
    }

    if (perdieron == true) {
        if (jugadores[jugadorActual - 1].preguntaAnterior === true) {
            setTimeout(() => {
                alert("¡¡¡¡FELICITACIONES!!!! GANASTE");
                location.replace("/");
            }, 1000);
        } else {
            setTimeout(() => {
                alert("PERDIERON TODOS");
                location.replace("/");
            }, 1000);
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
    opcion1.style.background = "#c4c6c6";
    opcion2.style.background = "#999b9be6";
    opcion3.style.background = "#c4c6c6";

    let min = 0;
    let max = preguntas.length - 1;
    numeroPregunta = Math.floor(Math.random() * (max - min + 1) + min);
    const{pregunta,opciones} = preguntas[numeroPregunta];
    const tituloPregunta = document.querySelector("#pregunta");
    tituloPregunta.innerHTML = pregunta;

    const arrayOpciones = opciones.split(/\r?\n/);
    opcion1.innerHTML = arrayOpciones[0];

    opcion2.innerHTML = arrayOpciones[1];

    opcion3.innerHTML = arrayOpciones[2];
}
