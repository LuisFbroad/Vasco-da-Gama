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

const carrossel = document.querySelector(".carrossel");
const imagens = document.querySelectorAll(".carrossel img");

let index = 0;

document.querySelector(".btn-next").addEventListener("click", () => {
    index++;
    if (index >= imagens.length) index = 0;
    carrossel.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector(".btn-prev").addEventListener("click", () => {
    index--;
    if (index < 0) index = imagens.length - 1;
    carrossel.style.transform = `translateX(-${index * 100}%)`;
});
