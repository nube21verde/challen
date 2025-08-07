// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = ["Marco","Leydi","Larry","Flor","Roman","Nicole"];
console.log(amigos);
//6
let primero = amigos[0];
let ultimo = amigos[amigos.length - 1];
amigos.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});

let nuevaLongitud = amigos.push();
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    for (let amigo of listaAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * listaAmigos.length);
    let nombreSorteado = listaAmigos[indice];

    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "<li>El amigo secreto es: <strong>" + nombreSorteado + "</strong></li>";
}


