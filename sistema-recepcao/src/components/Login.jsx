import React, { useState } from "react";
import styles from "./Login.module.css";

function LoginScreen (){

    const valoresIniciais = {
        login: "",
        senha: ""
    }
    const [value, setValue] = useState(valoresIniciais)

    const onChange = (e) =>{
        const {name, value} = e.target;

        console.log({name, value});
    }

    const entrar = () => {
        console.log(valoresIniciais);
    }
    
    return(
        <div className={styles.loginContainer}>
            <div className="form-floating mb-3">
                <input name ="Login" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={onChange}></input>
                <label htmlFor="floatingInput">Login</label>
            </div>
            <div className="form-floating">
                <input name ="Senha" type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={onChange}></input>
                <label htmlFor="floatingPassword">Senha</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Lembrar Usuário</label>
            </div>
            <button id="entrar" type="button" className="btn btn-outline-primary" onClick={entrar}>Entrar</button>
        </div>
    )    
}

export default LoginScreen