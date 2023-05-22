import React, { useState, useContext } from "react";
import styles from './login-funcionario.module.css';
import logFunc from '../../img/logFunc.png';
import { AuthContext} from "../../context/Auth";

const LoginFunc = ()=> {
    const {authenticated, login} = useContext(AuthContext);
    
    
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", {cpf, password});
        login(cpf,password)
    }

return (

    <div className={styles.group} id="login">
        <h1 className="title">• Login Funcionário</h1>
        
        <div>
        <img src={logFunc} className={styles.img} alt="" />
        </div>
        <form id="form" className={styles.card} onSubmit={handleSubmit}>
            <h2 className={styles.h2}>
            Seja bem-vindo à sua central de Funcionários !<hr/>
            </h2>
            <div className={styles.loginText}>
                <span>Preencha os campos abaixo e acesse o Portal dos Funcionários do sistema.</span>
                </div>
            <div className="field">
                <label htmlFor="CPF" className={styles.label}>ID</label>
                <input type="text" name="CPF" id="CPF" className={styles.cpf} value={cpf} onChange={(event) => setCpf(event.target.value)} />
            </div> 
            <div className="field">
                <label htmlFor="password" className={styles.labelSenha}>SENHA</label>
                <input type="password" name="password" id="password" className={styles.senha} value={password} onChange={(event) => setPassword(event.target.value)} />
            </div> 
            <div className="actions">
                <button type="submit" className={styles.submit}>Entrar</button>
            </div>  
        </form>

    </div>

)


}
export default LoginFunc;