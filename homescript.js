const Gradi = document.querySelector("#gradi");
const Luli = document.querySelector("#luli");
const Luisa = document.querySelector("#luisa");
const Thiago = document.querySelector("#thiago");

const linkGradi = "gradi.html";
const linkLuli = "luli.html";
const linkLuisa = "luisa.html";

const btn = document.createElement('button');

const entrou = true;
const saiu = false;



Gradi.addEventListener('mouseenter',function () {
    focaAlvo(Gradi, 0.8, btn, entrou );
   
});

Gradi.addEventListener('mouseleave',function () {
    focaAlvo(Gradi, 1, btn, saiu);
    
});

Gradi.addEventListener('click',function () {
    mudarPag(linkGradi);
});



Luli.addEventListener('mouseenter',function () {
    focaAlvo(Luli, 0.8, btn, entrou );
   
});

Luli.addEventListener('mouseleave',function () {
    focaAlvo(Luli, 1, btn, saiu);
    
});

Luli.addEventListener('click',function () {
    mudarPag(linkLuli);
});

Luisa.addEventListener('mouseenter',function () {
    focaAlvo(Luisa, 0.8, btn, entrou );
   
});

Luisa.addEventListener('mouseleave',function () {
    focaAlvo(Luisa, 1, btn, saiu);
    
});

Luisa.addEventListener('click',function () {
    mudarPag(linkLuisa);
});


function mudarPag (link) {
  window.location.href = link;    
  console.log('cliclou');
}

function focaAlvo(imagem, escala, botao, estaCima) {
    // Obtém o pai do elemento alvo
    const ultimo = imagem.lastChild;
    
    const pai = imagem.parentNode;
    // Obtém a lista de elementos irmãos
    const irmaos = Array.from(pai.children);
  
    // Altera a opacidade dos elementos irmãos
    irmaos.forEach(function(irmao) {
      if (irmao !== imagem) {
        irmao.style.transform = `scale(${escala})`;
        irmao.style.transition = `transform 300ms ease`;
      }
    });

    if (estaCima === true){
    botao.innerHTML = "Acesse agora!";
    ultimo.parentNode.insertBefore(botao, ultimo.nextSibling);
    botao.style.border = `none`;
    botao.style.width = `150px`;
    botao.style.padding = `10px`;
    botao.style.backgroundColor = `#3243a5`;
    botao.style.color = `#fff`;
    botao.style.fontSize = `18px`;
    botao.style.cursor = `pointer`;
    botao.style.borderRadius = `5px`;
    botao.style.fontFamily = `Jost, sans-serif`;
    botao.style.boxSizing = `border-box`;
    botao.style.position = `absolute`;
    }

    else {
        ultimo.remove();
    }
}
  