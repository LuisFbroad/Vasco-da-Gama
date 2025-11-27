const botaoTimeline = document.getElementById("toggle-timeline");
const caixaTimeline = document.getElementById("caixa-timeline");

botaoTimeline.addEventListener("click", () => {
    caixaTimeline.classList.toggle("aberto");

    if (caixaTimeline.classList.contains("aberto")) {
        botaoTimeline.textContent = "LER MENOS";
    } else {
        botaoTimeline.textContent = "VER TIMELINE";
    }
});

const botoesCarrinho = document.querySelectorAll(".btn-carrinho");

botoesCarrinho.forEach(botao => {
    botao.addEventListener("click", () => {
        botao.textContent = "✔ Adicionado!";
        botao.style.background = "#00c853";

        setTimeout(() => {
            botao.textContent = "Adicionar ao Carrinho";
            botao.style.background = "#e60000";
        }, 1500);
    });
});