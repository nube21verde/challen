let listaDeAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("El nombre ya ha sido agregado. Por favor, ingrese un nombre diferente.");
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
        
        // CORRECCIÓN 1: La variable correcta es 'amigo', no 'amigoSecreto'.
        li.textContent = amigo;
        
        // CORRECCIÓN 2: Debes agregar el elemento 'li' a la lista 'ul'.
        ul.appendChild(li);
    }
}

// CORRECCIÓN 3: La función 'sortearAmigo' debe estar afuera, no anidada.
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Agrega al menos 2 nombres antes de sortear.");
        return;
    }

    let sorteados;
    let esValido = false;

    // Repetir el sorteo hasta que sea válido
    while (!esValido) {
        // 1. Copiamos y mezclamos la lista
        sorteados = [...listaDeAmigos];
        for (let i = sorteados.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
        }

        // 2. Verificamos si alguien se sacó a sí mismo
        let autoseleccion = false;
        for (let i = 0; i < listaDeAmigos.length; i++) {
            if (listaDeAmigos[i] === sorteados[i]) {
                autoseleccion = true;
                break; // Si encontramos uno, no hace falta seguir verificando
            }
        }

        // 3. Si no hubo autoselección, el sorteo es válido
        if (!autoseleccion) {
            esValido = true;
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


