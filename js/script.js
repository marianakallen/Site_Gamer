//Validação de Login
function login() {
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario == "admin" && senha == "123456") {
        window.location = "index.html";
        logado = 1;
    }

    if (logado == 0) {
        alert("Usuário ou senha incorretos");
    }

}

function getCarrinho() {
    var carrinho = localStorage.getItem("carrinhoOlimpus");
    return carrinho ? JSON.parse(carrinho) : [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinhoOlimpus", JSON.stringify(carrinho));
}

function adicionarAoCarrinho(nome, preco) {
    var carrinho = getCarrinho();
    carrinho.push({ nome: nome, preco: preco });
    salvarCarrinho(carrinho);
    alert(nome + " foi adicionado ao carrinho!");
}

function renderizarCarrinho() {
    var lista = document.getElementById("lista-carrinho");
    if (!lista) return;

    var carrinho = getCarrinho();
    var total = 0;
    lista.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = "<li>Seu carrinho está vazio.</li>";
    }

    carrinho.forEach(function (item, index) {
        total += item.preco;

        var li = document.createElement("li");
        li.textContent = item.nome + " — R$ " + item.preco.toFixed(2).replace(".", ",") + " ";

        var btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.className = "btn btn-sm btn-danger";
        btnRemover.onclick = function () { removerDoCarrinho(index); };

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });

    document.getElementById("total-carrinho").textContent = total.toFixed(2).replace(".", ",");
}

function removerDoCarrinho(index) {
    var carrinho = getCarrinho();
    carrinho.splice(index, 1);
    salvarCarrinho(carrinho);
    renderizarCarrinho();
}

document.addEventListener("DOMContentLoaded", renderizarCarrinho);
