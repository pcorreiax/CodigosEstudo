const lista = document.getElementById('lista');
const campo = document.getElementById('campo');
const botao = document.getElementById('botao').onclick = function(){adicionarConvidado()};

let convidados = JSON.parse(localStorage.getItem("convidados")) || [];

let salvar = () => {
    localStorage.setItem("convidados", JSON.stringify(convidados));
}

const listarConvidados = function(){
        lista.innerHTML =""
    for (const convidado of convidados) {
        let elConvidado = document.createElement('li');
        let elNome = document.createTextNode(convidado.nome);

        let elExcluir = document.createElement('a');
        elExcluir.setAttribute('href', '#');
        let excluir = document.createTextNode(' Excluir')
        
        elExcluir.onclick = function(){
            convidados = convidados.filter(function(item){
                return item.nome !== convidado.nome;
            })
            listarConvidados();
            salvar();
        }
        
        elConvidado.appendChild(elNome);
        lista.appendChild(elConvidado);
        elExcluir.appendChild(excluir);
        elConvidado.appendChild(elExcluir);
    }
}

const adicionarConvidado = () => {
    let nome = campo.value;
    convidados.push({id: convidados.length + 1 , nome, idade: idadeAleatoria(9, 80)});
    listarConvidados();
    salvar();
    campo.value = "";
}


const idadeAleatoria = (min, max) => Math.floor(Math.random() * (max - min) + min);