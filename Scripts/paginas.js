const btnGradi = document.querySelector("#gradi");
const btnLuisa = document.querySelector("#luisa");
const btnLuli = document.querySelector("#luli");
const btnThiago = document.querySelector("#thiago");

btnGradi.addEventListener("click", function mudarPag () {
    window.location.href = 'gradi.html';    
    console.log('cliclou');
});

btnLuisa.addEventListener("click", function mudarPag () {
    window.location.href = 'luisa.html';    
    console.log('cliclou');
});

btnLuli.addEventListener("click", function mudarPag () {
    window.location.href = 'luli.html';    
    console.log('cliclou');
});

btnThiago.addEventListener("click", function mudarPag () {
    window.location.href = 'thiago.html';    
    console.log('cliclou');
});
