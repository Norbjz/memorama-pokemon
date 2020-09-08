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
    if (activas < 2 && !this.classList.contains("par1") && !this.classList.contains("par2") && !this.classList.contains("pareja")) {
        var check = document.querySelector(".par1");
        if (check === null) {
            this.classList.add("par1");
            this.classList.add("pareja");
        } else {
            this.classList.add("par2");
            this.classList.add("pareja");
        }
        activas++;
        if (activas === 2) {
            var cartapar1 = document.querySelector(".par1 .carta-frente");
            var cartapara =Array.from(cartapar1.children)
            console.log(cartapara);

            var cartapar2 = document.querySelector(".par2 .carta-frente");
            var cartaparb =Array.from(cartapar2.children)
            console.log(cartaparb);

            if (cartapara == cartaparb) {
                document.getElementById("aviso").innerHTML = "¡Felicidades!"
                activas = 0;
            } else {
                setTimeout(function(){  
                    for (let i = 0; i < activas; i++) {
                        var seleccion = document.querySelector(".pareja");
                        seleccion.classList.remove("pareja");
                    }
                    activas = 0;
                }, 1000);
            }
            var removerpar = document.querySelector(".par1");
            removerpar.classList.remove("par1");

            var removerpar = document.querySelector(".par2");
            removerpar.classList.remove("par2");
        }
    }
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