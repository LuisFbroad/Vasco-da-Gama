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