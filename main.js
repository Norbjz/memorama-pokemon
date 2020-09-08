const carta1 = document.getElementById("carta1");
const carta2 = document.getElementById("carta2");
const carta3 = document.getElementById("carta3");
const carta4 = document.getElementById("carta4");
const carta5 = document.getElementById("carta5");
const carta6 = document.getElementById("carta6");
const carta7 = document.getElementById("carta7");
const carta8 = document.getElementById("carta8");
const carta9 = document.getElementById("carta9");
const carta10 = document.getElementById("carta10");
const carta11 = document.getElementById("carta11");
const carta12 = document.getElementById("carta12");
const reloj = document.getElementById("startBtn")

const parent = document.querySelector(".tablero .row");
for(var i = 0; i < parent.children.length; i++){
  parent.appendChild(parent.children[Math.random() * i | 0]);
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

carta1.addEventListener("click", voltear);
carta2.addEventListener("click", voltear);
carta3.addEventListener("click", voltear);
carta4.addEventListener("click", voltear);
carta5.addEventListener("click", voltear);
carta6.addEventListener("click", voltear);
carta7.addEventListener("click", voltear);
carta8.addEventListener("click", voltear);
carta9.addEventListener("click", voltear);
carta10.addEventListener("click", voltear);
carta11.addEventListener("click", voltear);
carta12.addEventListener("click", voltear);
reloj.addEventListener("click", tiempoAtras);