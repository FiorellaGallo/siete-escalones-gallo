let cantidadParticipantes = 0;
let jugadores2 = document.getElementById("jugadores2");

jugadores2.addEventListener("click", (event) => {
    cantidadParticipantes = 2;
    escribirNombres();
    participara(event);
});


let jugadores3 = document.getElementById("jugadores3");

jugadores3.addEventListener("click", (event) => {
    cantidadParticipantes = 3;
    escribirNombres();
    participara(event);
});

function escribirNombres() {
    document.getElementById('nombres').style.display = 'block';
    document.getElementById('botonJugadores').style.display = 'none';
}

let jugadores;
let arrayJugadores = Array();


function participara(event) {

    for (let index = 1; index <= event.target.value; index++) {
        const divInput = document.getElementById('divInput');
        const div = document.createElement('div');
        divInput.appendChild(div);
        div.innerHTML = `<input type="text" id="jugador${index}" class="form-control" placeholder="${index}º jugador" aria-label="Nombre">`;
    }
    let aceptar = document.getElementById("aceptar");

    aceptar.addEventListener("click", () => {

        for (let index = 1; index <= cantidadParticipantes; index++) {
            const input = document.getElementById(`jugador${index}`)
            const jugador = new Jugador(input.value, index, true , 0);
            arrayJugadores.push(jugador);
            localStorage.setItem("jugadores", JSON.stringify (arrayJugadores));
        }
        
    });

    console.log(arrayJugadores);

}




