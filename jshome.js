const btnGradi = document.querySelector("#gradi");

btnGradi.addEventListener("click", function mudarPag () {
    window.location.href = 'gradi.html';    
    console.log('cliclou');
});


btnGradi.addEventListener('mouseover', function() {

  const pai = btnGradi.parentNode;

  const irmaos = Array.from(pai.children);
  irmaos.forEach(function(irmao) {
    if (irmao !== btnGradi) {
      pai.removeChild(irmao);
    }
  });
});
