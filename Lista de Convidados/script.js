const elNome = document.getElementById('input-nome');
const elIdade = document.getElementById('input-idade');
const elLista = document.getElementById('lista');
const elEnviar = document.getElementById('enviar').onclick = function(){addConvidado()};
const elFiltro = document.getElementById('filtro').onclick = function(){filtarIdade()};
const excluiQuemDaCu = document.getElementById('cu');

let convidados = JSON.parse(localStorage.getItem('convidados')) || [{id: 1,nome: 'Pedro', idade: 30}];

const salvar = () => localStorage.setItem('convidados', JSON.stringify(convidados));

const listarConvidados = () => {

    elLista.innerHTML = '';

    for (const convidado of convidados) {

            const ElNomelista = document.createElement('li');
            const nome = document.createTextNode(`Nome: ${convidado.nome} | Idade: ${convidado.idade}`);

            const elExcluir = document.createElement('button');
            const excluir = document.createTextNode('Excluir');

            elExcluir.className = 'btn excluir';
           

            elLista.appendChild(ElNomelista);
            ElNomelista.appendChild(nome);
            ElNomelista.appendChild(elExcluir);
            elExcluir.appendChild(excluir);

            elExcluir.onclick = () => {
                convidados = convidados.filter(function(item){
                    return item.id !== convidado.id;
                });

            listarConvidados();
            salvar();
            }
    }
};

const addConvidado = () => {

    (elNome.value !== '' && elIdade.value !== '') ? convidados.push({id: convidados.length + 1, nome: elNome.value, idade: elIdade.value}) : alert('Preencha todos os campos!')
    listarConvidados();
    salvar();

    elNome.value = '';
    elIdade.value = '';
}

const filtarIdade = () => {
    convidados = convidados.filter(function(item){
        return item.idade > 18;
    });
    listarConvidados();
    salvar();
}

const deleteDaCu = () => {
  convidados = convidados.filter(function(item){
     return item.nome.toLowerCase() !== 'pedro';
  });
  listarConvidados();
  salvar();

}

excluiQuemDaCu.addEventListener('click', deleteDaCu)


listarConvidados();