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

var activas = 0;

function voltear() {
    if (activas < 2 && !this.classList.contains("visible") && !this.classList.contains("pareja")) {
        this.classList.add("visible");
        activas++;
        if (activas === 2) {
            var par = document.getElementsByClassName('visible');
            console.log(par);
            //idea: con querrySelector buscar las visibles y darles una clase diferente luego comparar si dentro de esas clases hay una clase similar
            //idea: cambiar cartas a clase con el nombre del pokemon
            setTimeout(function(){  
                for (let i = 0; i < activas; i++) {
                    var seleccion = document.querySelector(".visible");
                    seleccion.classList.remove("visible");
                }
                activas = 0;
            }, 1000);
            
            
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

var parent = document.querySelector(".tablero .row");
for(var i = 0; i < parent.children.length; i++){
  parent.appendChild(parent.children[Math.random() * i | 0]);
}

// var mazo = Array.from(parent.children);

// for (let i = 0; i < mazo.length; i++) {
//     mazo[i] = 'carta' + i;
//     console.log(mazo[i]);
// }