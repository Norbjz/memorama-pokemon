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

function voltear1() {
    carta1.classList.toggle("visible");
}

function voltear2() {
    carta2.classList.toggle("visible");
}

function voltear3() {
    carta3.classList.toggle("visible");
}

function voltear4() {
    carta4.classList.toggle("visible");
}

function voltear5() {
    carta5.classList.toggle("visible");
}

function voltear6() {
    carta6.classList.toggle("visible");
}

function voltear7() {
    carta7.classList.toggle("visible");
}

function voltear8() {
    carta8.classList.toggle("visible");
}

function voltear9() {
    carta9.classList.toggle("visible");
}

function voltear10() {
    carta10.classList.toggle("visible");
}

function voltear11() {
    carta11.classList.toggle("visible");
}

function voltear12() {
    carta12.classList.toggle("visible");
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

carta1.addEventListener("click", voltear1);
carta2.addEventListener("click", voltear2);
carta3.addEventListener("click", voltear3);
carta4.addEventListener("click", voltear4);
carta5.addEventListener("click", voltear5);
carta6.addEventListener("click", voltear6);
carta7.addEventListener("click", voltear7);
carta8.addEventListener("click", voltear8);
carta9.addEventListener("click", voltear9);
carta10.addEventListener("click", voltear10);
carta11.addEventListener("click", voltear11);
carta12.addEventListener("click", voltear12);
reloj.addEventListener("click", tiempoAtras);

var parent = document.querySelector(".tablero .row");
for(var i = 0; i < parent.children.length; i++){
  parent.appendChild(parent.children[Math.random() * i | 0]);
}