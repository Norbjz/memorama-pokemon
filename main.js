
const reloj = document.getElementById("startBtn")
const reset = document.getElementById("resetBtn")

var activas = 0;
var segundos = 60;

function barajar() {
    let random = document.querySelector(".tablero .row");
    for (var i = 0; i < random.children.length; i++) {
        random.appendChild(random.children[Math.random() * i | 0]);
    }
}

function jugando() {
    alert('¡Atrapalos a todos!');
    cartas = document.querySelectorAll(".carta");
        for (let i = 0; i < cartas.length; i++) {
        cartas[i].addEventListener("click", voltear);
}
}

function voltear() {
    if (activas < 2 && !this.classList.contains("par") && !this.classList.contains("pareja")) {
        this.classList.add("pareja");
        activas++;
        checarPar();
    }
}

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

function regresarCartas() {
    document.getElementById("aviso").innerHTML = "¡Los pokemon han huido!"
    setTimeout(function () {
        for (let i = 0; i < activas; i++) {
            var seleccion = document.querySelector(".pareja");
            seleccion.classList.remove("pareja");
        }
        activas = 0;
    }, 1000);
}

function iniciar() {
    document.getElementById("startBtn").disabled = 'true';
    reset.addEventListener("click", reseteo);
    setInterval(function () {
        tempo()
    }, 1000);
    barajar();
    jugando();
}

function reseteo() {
    clearInterval(segundos);
    segundos = 61;
    cartas = document.querySelectorAll(".carta");
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].classList.remove("par");
        cartas[i].classList.remove("pareja");
    }
    barajar();
    jugando();
}

function tempo () {
    segundos--;
    if (segundos === 0) {
        clearTimeout(segundos);
        alert('Se terminó tu tiempo :(');
    } 
    if (segundos >= 0) {
        span = document.getElementById("tiempo");
        span.innerHTML = segundos;
    }
}

function victoria () {
    let capturados = document.querySelectorAll(".par");
    if (capturados.length === 12) {
        clearInterval(segundos);
        segundos = -1;
        document.getElementById("aviso").innerHTML = "¡Felicidades!"
        alert('¡Ahora eres un maestro pokémon! :D');
    }
}

reloj.addEventListener("click", iniciar);
