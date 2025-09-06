//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array que vai armazenar os amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong> 🎉</li>`;
}