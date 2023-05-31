const cards = document.querySelectorAll('.slider');
const btnAnterior = document.getElementById('prev-button');
const btnPosterior = document.getElementById('next-button');

let cardAtual = 0;

function apagaCards() {
  cards.forEach(item => item.classList.remove('on'))
}

function mostraCards() {
  cards[cardAtual].classList.add('on');
}

function proximoCard() {
  apagaCards()
  if(cardAtual === cards.length -1) {
    cardAtual = 0
  } else {
    cardAtual++
  }
  mostraCards()
}

function anteriorCard() {
  apagaCards()
  if(cardAtual === 0) {
    cardAtual = cards.length -1
  } else {
    cardAtual--
  }
  mostraCards()
}

btnPosterior.addEventListener('click', proximoCard)
btnAnterior.addEventListener('click', anteriorCard)


console.log(cards)

