var nome = document.getElementById('adicionarConvidado-nome');
var idade = document.getElementById('adicionarConvidado-idade');
var cpf = document.getElementById('adicionarConvidado-cpf');
var enviar = document.getElementById('salvar');



var buscaNome = document.getElementById('busca-nome').onclick = function(){buscaSelecionada('nome')};
var buscaIdade = document.getElementById('busca-idade').onclick = function(){buscaSelecionada('idade')};
var buscaCpf = document.getElementById('busca-cpf').onclick = function(){buscaSelecionada('cpf')};

function buscaSelecionada(selecionado){
    if(selecionado == 'nome'){
        alert( convidados[nome.value].nome)
    }else if(selecionado == 'idade'){
        alert( convidados[nome.value].idade)
    }else if(selecionado == 'cpf'){
        alert( convidados[nome.value].cpf)
    }
}

var teste = document.getElementById('lista-convidados');

enviar.onclick = function(){
    console.log(adicionarConvidado(nome.value, idade.value, cpf.value));
    teste.innerHTML = "<li>Nome: "+nome.value+" | Idade: "+idade.value+"  | CPF: "+cpf.value+"</li></br>"
    
}

function adicionarConvidado(n, i, c){
    convidados = {};
    return convidados[n] = {nome: n, idade: i, cpf: c}; 
    
}

