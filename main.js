const reloj = document.getElementById("startBtn")
const reset = document.getElementById("resetBtn")

//Elimina drag de imagenes de pokebolas
const tomar = document.querySelectorAll(".pokebola")
for (var i = 0; i < tomar.length; i++) {
    tomar[i].setAttribute("draggable", "false");
}

//Elimina drag de imagenes de pokemon
const tomarpoke = document.querySelectorAll(".poke")
for (var i = 0; i < tomarpoke.length; i++) {
    tomarpoke[i].setAttribute("draggable", "false");
}

var activas = 0;
var segundos = 60;

//Acomoda de manera aleatoria las "cartas"
function barajar() {
    let random = document.querySelector(".tablero .row");
    for (var i = 0; i < random.children.length; i++) {
        random.appendChild(random.children[Math.random() * i | 0]);
    }
}

//Permite voltear las cartas solo cuando el juego este en curso
function jugando() {
    alert('¡Atrapalos a todos!');
    let cartas = document.querySelectorAll(".carta");
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].addEventListener("click", voltear);
    }
}

//Voltea la carta e impide que se volteen cartas que ya estan boca arriba
function voltear() {
    if (activas < 2 && !this.classList.contains("par") && !this.classList.contains("pareja")) {
        this.classList.add("pareja");
        activas++;
        checarPar();
    }
}

//Revisa si las cartas activas son iguales o no
function checarPar() {
    if (activas === 2) {
        let cartapar = document.querySelectorAll(".pareja");
        if (cartapar[0].dataset.pokemon == cartapar[1].dataset.pokemon) {
            parEncontrado(cartapar);
        } else {
            regresarCartas();
        }
    }
}

//Al encontrar un par permite que las cartas se queden boca arriba y llama a la funcion victoria
function parEncontrado(a) {
    for (let i = 0; i < a.length; i++) {
        a[i].classList.add("par")
        a[i].classList.remove("pareja")
    }
    document.getElementById("aviso").innerHTML = "¡Capturaste un par!"
    activas = 0;
    setTimeout(function () {
        victoria();
    }, 100);
}

//Permite regresar las cartas boca abajo si es que no son pares
function regresarCartas() {
    document.getElementById("aviso").innerHTML = "¡Los pokemon han huido!"
    setTimeout(function () {
        for (let i = 0; i < activas; i++) {
            let seleccion = document.querySelector(".pareja");
            seleccion.classList.remove("pareja");
        }
        activas = 0;
    }, 1000);
}

//Inicia el contador y llama a las funciones barajar y jugando
function iniciar() {
    document.getElementById("startBtn").disabled = 'true';
    reset.addEventListener("click", reseteo);
    setInterval(function () {
        tempo()
    }, 1000);
    barajar();
    jugando();
}

//Reinicia el contador, devuelve todas las cartas boca abajo y llama a las funciones barajar y jugando
function reseteo() {
    clearInterval(segundos);
    segundos = 61;
    let cartas = document.querySelectorAll(".carta");
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].classList.remove("par");
        cartas[i].classList.remove("pareja");
    }
    barajar();
    jugando();
}

//Permite que el tiempo sea visible en pantalla y al llegar a cero llama a la funcion gameOver
function tempo() {
    segundos--;
    if (segundos === 0) {
        clearTimeout(segundos);
        alert('Se terminó tu tiempo :(');
        gameOver();
    }
    if (segundos >= 0) {
        span = document.getElementById("tiempo");
        span.innerHTML = segundos;
    }
}

//Impide que se puedan voltear cartas si el tiempo llega a cero
function gameOver() {
    let cartas = document.querySelectorAll(".carta");
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].removeEventListener("click", voltear);
    }
}

//Verifica que si es que se han encontrado todos los pares y detiene el contador en el segundo que se encontraron
function victoria() {
    let capturados = document.querySelectorAll(".par");
    if (capturados.length === 12) {
        clearInterval(segundos);
        segundos = -1;
        document.getElementById("aviso").innerHTML = "¡Felicidades!"
        alert('¡Ahora eres un maestro pokémon! :D');
    }
}

reloj.addEventListener("click", iniciar);
