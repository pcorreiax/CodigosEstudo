var nome = prompt('Qual o seu nome?');
var jogadorNome = document.getElementById('jogador-nome');
var jogadorEscolha1 = document.getElementById('jogador-escolha-1');
var jogadorEscolha2 = document.getElementById('jogador-escolha-2');
var jogadorEscolha3 = document.getElementById('jogador-escolha-3');
var computadorEscolha1 = document.getElementById('computador-escolha-1');
var computadorEscolha2 = document.getElementById('computador-escolha-2');
var computadorEscolha3 = document.getElementById('computador-escolha-3');
var mensagens = document.getElementById('mensagens');
var jogadorPontos = document.getElementById('jogador-pontos');
var computadorPontos = document.getElementById('computador-pontos');

var placarjogador = 1;
var placarComputador = 1;

jogadorNome.innerHTML = nome;
mensagens.innerHTML = "Bem vindo, " + nome;

jogadorEscolha1.onclick = function(){
  numeroAleatorio = gerarNumero(1, 3);
  resetarOpacidade()
  if (numeroAleatorio === 1) {
    console.log(numeroAleatorio);
    mensagens.innerHTML = "Empate!";
    computadorEscolha1.style.opacity = 1;
    jogadorEscolha1.style.opacity = 1;
  }else if (numeroAleatorio === 2) {
    console.log(numeroAleatorio);
    computadorPontos.innerHTML = placarComputador++;
    mensagens.innerHTML = "Computador Ganhou!";
    computadorEscolha2.style.opacity = 1;
    jogadorEscolha1.style.opacity = 1;
  }else if (numeroAleatorio === 3) {
    console.log(numeroAleatorio);
    mensagens.innerHTML = nome +" Ganhou!";
    jogadorPontos.innerHTML = placarjogador++;
    computadorEscolha3.style.opacity = 1;
    jogadorEscolha1.style.opacity = 1;
  }
}

jogadorEscolha2.onclick = function(){
  numeroAleatorio = gerarNumero(1, 3);
  resetarOpacidade()
  if (numeroAleatorio === 2) {
    console.log(numeroAleatorio);
    mensagens.innerHTML = "Empate!";
    computadorEscolha2.style.opacity = 1;
    jogadorEscolha2.style.opacity = 1;
  }else if (numeroAleatorio === 3) {
    console.log(numeroAleatorio);
    computadorPontos.innerHTML = placarComputador++;
    mensagens.innerHTML = "Computador Ganhou!";
    computadorEscolha3.style.opacity = 1;
    jogadorEscolha2.style.opacity = 1;
  }else if (numeroAleatorio === 1) {
    console.log(numeroAleatorio);
    mensagens.innerHTML = nome +" Ganhou!";
    jogadorPontos.innerHTML = placarjogador++;
    computadorEscolha1.style.opacity = 1;
    jogadorEscolha2.style.opacity = 1;
  }
}

jogadorEscolha3.onclick = function(){
  numeroAleatorio = gerarNumero(1, 3);
  resetarOpacidade()
  if (numeroAleatorio === 3) {
    console.log(numeroAleatorio);
    mensagens.innerHTML = "Empate!";
    computadorEscolha3.style.opacity = 1;
    jogadorEscolha3.style.opacity = 1;
  }else if (numeroAleatorio === 1) {
    console.log(numeroAleatorio);
    computadorPontos.innerHTML = placarComputador++;
    mensagens.innerHTML = "Computador Ganhou!";
    computadorEscolha1.style.opacity = 1;
    jogadorEscolha3.style.opacity = 1;
  }else if (numeroAleatorio === 2) {
    console.log(numeroAleatorio);
    mensagens.innerHTML = nome +" Ganhou!";
    jogadorPontos.innerHTML = placarjogador++;
    computadorEscolha2.style.opacity = 1;
    jogadorEscolha3.style.opacity = 1;
  }
}

function gerarNumero(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function resetarOpacidade(){
  computadorEscolha1.style.opacity = .2;
  computadorEscolha2.style.opacity = .2;
  computadorEscolha3.style.opacity = .2;
  jogadorEscolha1.style.opacity = .2;
  jogadorEscolha2.style.opacity = .2;
  jogadorEscolha3.style.opacity = .2;
}
