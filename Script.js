const botaoHino = document.getElementById("toggle-hino");
const caixaHino = document.getElementById("caixa-hino");

botaoHino.addEventListener("click", () => {
    caixaHino.classList.toggle("aberto");
});
