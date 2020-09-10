const reloj = document.getElementById("startBtn")

const random = document.querySelector(".tablero .row");
for(var i = 0; i < random.children.length; i++){
  random.appendChild(random.children[Math.random() * i | 0]);
}

cartas = document.querySelectorAll(".carta");
for (let i = 0; i < cartas.length; i++) {
    cartas[i].addEventListener("click", voltear);
}

var activas = 0;

function voltear() {
    if (activas < 2 && !this.classList.contains("par") && !this.classList.contains("pareja")) {
        this.classList.add("pareja");
        activas++;
        checarPar();
    }
}

function checarPar() {
    if (activas === 2) {
        var cartapar = document.querySelectorAll(".pareja");
        if (cartapar[0].dataset.pokemon==cartapar[1].dataset.pokemon) {
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
        document.getElementById("aviso").innerHTML = "¡Felicidades capturaste un par!"
        activas = 0;
}

function regresarCartas() {
    document.getElementById("aviso").innerHTML = "¡Los pokemon han huido!"
    setTimeout(function(){  
        for (let i = 0; i < activas; i++) {
            var seleccion = document.querySelector(".pareja");
            seleccion.classList.remove("pareja");
        }
        activas = 0;
    }, 1000);
}

function tiempoAtras() {
    var counter = 90;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
        span = document.getElementById("tiempo");
        span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('Se terminó tu tiempo :(');
            clearInterval(counter);
        }
    }, 1000);
}

reloj.addEventListener("click", tiempoAtras);