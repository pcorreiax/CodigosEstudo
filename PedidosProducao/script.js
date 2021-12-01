var alimentacaoGeral = document.getElementById('opcao-alimentacao-geral');
var divAlimentacaoGeral = document.getElementById('alimentacao-geral');

document.getElementById('opcao-alimentacao-geral').onclick = function(){selecionar('alimentacao-geral');}
document.getElementById('opcao-kit-lanche').onclick = function(){selecionar('kit-lanche');}
document.getElementById('opcao-alimentacao-porcionado').onclick = function(){selecionar('alimentacao-porcionado');}
document.getElementById('opcao-banheiro-quimico').onclick = function(){selecionar('banheiro-quimico');}
document.getElementById('opcao-cet-rio').onclick = function(){selecionar('cet-rio');}
document.getElementById('opcao-limpeza').onclick = function(){selecionar('limpeza');}
document.getElementById('opcap-vigilante-brigadista').onclick = function(){selecionar('vigilante-brigadista');}
document.getElementById('opcao-uti').onclick = function(){selecionar('uti');}
document.getElementById('opcao-gelo').onclick = function(){selecionar('gelo');}


function selecionar(selecionado){
    document.getElementById('alimentacao-geral').setAttribute('hidden','');
    document.getElementById('kit-lanche').setAttribute('hidden','');
    document.getElementById('alimentacao-porcionado').setAttribute('hidden','');
    document.getElementById('banheiro-quimico').setAttribute('hidden','');
    document.getElementById('cet-rio').setAttribute('hidden','');
    document.getElementById('limpeza').setAttribute('hidden','');
    document.getElementById('vigilante-brigadista').setAttribute('hidden','');
    document.getElementById('uti').setAttribute('hidden','');
    document.getElementById('gelo').setAttribute('hidden','');
    document.getElementById(selecionado).removeAttribute("hidden");
}



