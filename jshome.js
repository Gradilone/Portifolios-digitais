// const btnGradi = document.querySelector("#gradi");
// const btnLuli = document.querySelector("#luli");
// const btnLuisa = document.querySelector("#luisa");
// const btnThiago = document.querySelector("#thiago");

// const linkGradi = "gradi.hmtl";
// const linkLuli = "luli.hmtl";
// const linkLuisa = "luisa.hmtl";


// btnGradi.addEventListener('mouseover', removeIrmao(btnGradi));

// btnLuli.addEventListener('mouseover', removeIrmao(linkLuisa));



// // function mudarPag (link) {
// //   window.location.href = link;    
// //   console.log('cliclou');
// // }


function removeIrmao(botao) {

  const pai = botao.parentNode;

  const irmaos = Array.from(pai.children);
  irmaos.forEach(function(irmao) {
    if (irmao !== botao) {
      pai.removeChild(irmao);
    }
  });
}
