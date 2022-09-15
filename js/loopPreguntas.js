let preguntas = retornarPregunta();
let min = 0;
let max = preguntas.length - 1;
let numeroPregunta = Math.floor((Math.random() * (max - min + 1)) + min);
let preguntaActual = preguntas[numeroPregunta];

window.addEventListener('load', function () {

    const tituloPregunta = document.querySelector("#pregunta");
    tituloPregunta.innerHTML = preguntaActual.pregunta;

    const opcion1 = document.querySelector("#opcion1");
    const arrayOpciones = preguntaActual.opciones.split(/\r?\n/);
    opcion1.innerHTML = arrayOpciones[0];

    const opcion2 = document.querySelector("#opcion2");
    opcion2.innerHTML = arrayOpciones[1];

    const opcion3 = document.querySelector("#opcion3");
    opcion3.innerHTML = arrayOpciones[2];


    let respuesta1 = document.getElementById("opcion1");

    respuesta1.addEventListener("click", (event) => {
        if ("a" == preguntaActual.respuesta) {
            jugadorActual = true;
            respuesta1.style.background = "green";
            setTimeout(recargarPregunta, 1000);


        } else {
            respuesta1.style.background = "red";
            setTimeout(() => {
                alert("PERDISTE");
                location.replace("/");
            }, 1000);

        }

    });


    let respuesta2 = document.getElementById("opcion2");

    respuesta2.addEventListener("click", (event) => {
        if ("b" == preguntaActual.respuesta) {
            jugadorActual = true;
            respuesta2.style.background = "green";
            setTimeout(recargarPregunta, 1000);


        } else {
            respuesta2.style.background = "red";
            setTimeout(() => {
                alert("PERDISTE");
                location.replace("/");
            }, 1000);


        }

    });


    let respuesta3 = document.getElementById("opcion3");

    respuesta3.addEventListener("click", (event) => {
        if ("c" == preguntaActual.respuesta) {
            jugadorActual = true;
            respuesta3.style.background = "green";
            setTimeout(recargarPregunta, 1000);

        } else {
            respuesta3.style.background = "red";
            setTimeout(() => {
                alert("PERDISTE");
                location.replace("/");
            }, 1000);

        }

    });


});

function recargarPregunta() {
    const opcion1 = document.querySelector("#opcion1");
    const opcion2 = document.querySelector("#opcion2");
    const opcion3 = document.querySelector("#opcion3");

    if (preguntaActual.respuesta === "a" || preguntaActual.respuesta === "c") {
        opcion1.style.background = "#c4c6c6";
        opcion3.style.background = "#c4c6c6";

    } else {
        opcion2.style.background = "#999b9be6";
    }

    let min = 0;
    let max = preguntas.length - 1;
    numeroPregunta = Math.floor((Math.random() * (max - min + 1)) + min);
    preguntaActual = preguntas[numeroPregunta];
    const tituloPregunta = document.querySelector("#pregunta");
    tituloPregunta.innerHTML = preguntaActual.pregunta;

    const arrayOpciones = preguntaActual.opciones.split(/\r?\n/);
    opcion1.innerHTML = arrayOpciones[0];

    opcion2.innerHTML = arrayOpciones[1];

    opcion3.innerHTML = arrayOpciones[2];

}