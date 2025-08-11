// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    listaDeAmigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpia el input
}

function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpia la lista anterior

    for (let amigo of listaDeAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Agrega al menos 2 nombres antes de sortear.");
        return;
    }

    // Copiamos la lista y la mezclamos
    let sorteados = [...listaDeAmigos];
    for (let i = sorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
    }

    // Verificamos que nadie se haya tocado a sí mismo
    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (listaDeAmigos[i] === sorteados[i]) {
            // Repetimos el sorteo si alguien se tocó a sí mismo
            sortearAmigo();
            return;
        }
    }

    // Mostramos el resultado
    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${listaDeAmigos[i]} le regala a ${sorteados[i]}`;
        ulResultado.appendChild(li);
    }
}
//no entiennndoooo




