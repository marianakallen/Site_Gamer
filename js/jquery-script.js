$(document).ready(function () {
    $("#botao-cadastrar").click(function () {
        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    });
});

function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}