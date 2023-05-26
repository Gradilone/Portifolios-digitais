const bntArirDeck = document.querySelector("#bnt-interno");
const cards = document.querySelector("#on");

cards.style.opacity = '0';
bntArirDeck.addEventListener("click", function exibirCards () {
    if (cards.style.opacity == '0'){
    bntArirDeck.innerHTML = "Fechar meu deck";
    cards.style.opacity = '1';
    cards.style.transition = 'opacity 3s';
    console.log("abrir deck");
    }
    else{
        bntArirDeck.innerHTML = "Abrir meu deck";
        cards.style.opacity = '0';
        cards.style.transition = 'opacity 3s';
        console.log("fechar deck");
    }
});







