const elLogin = document.getElementById('floatingInput');
const elSenha = document.getElementById('floatingPassword');
const elLembrar = document.getElementById('flexSwitchCheckDefault')
const elEntrar = document.getElementById('entrar').onclick = function(){entrar()};

const entrar = () => {
    console.log(`Login: ${elLogin.value}, Senha: ${elSenha.value}, Lembrar?: ${elLembrar.checked}`)
}