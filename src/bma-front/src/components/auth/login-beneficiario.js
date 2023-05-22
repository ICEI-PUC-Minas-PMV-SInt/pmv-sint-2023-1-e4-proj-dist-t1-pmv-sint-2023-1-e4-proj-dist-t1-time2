
import styles from './login-beneficiario.module.css';
import familyGroup from '../../img/family-group.png';


function LoginBen(){
return (
    <div className={styles.group}>
        <h1 className="title">• Portal do Beneficiário</h1>
        <div>
        <img src={familyGroup} className={styles.img} alt="" />
        </div>

        <form className={styles.card} id="formLogin">
            <h2 className={styles.h2}>Seja bem-vindo à sua central de consultas !<hr/></h2>
            <div className={styles.loginText}>
                <span>Caso esteja cadastrado no programa, insira seu CPF para acesso à central de consulta do beneficiário.</span>
                </div>
            <div className="field">
                <label htmlFor="CPF" className={styles.label}>CPF</label>
                <input type="text" name="CPF" className={styles.cpf} />
            </div>  
            <div className="actions">
                <button type="submit" className={styles.submit}>Entrar</button>
            </div> 
            <div className={styles.help}>
            <span>Ainda não é cadastrado ? Acesse o site do CRAS <a href="#"><b>CLICANDO AQUI</b></a> para saber com mais detalhes sobre como participar do Programa Banco de Alimentos.</span>
        </div> 
        </form>

    </div>
)
}

export default LoginBen;