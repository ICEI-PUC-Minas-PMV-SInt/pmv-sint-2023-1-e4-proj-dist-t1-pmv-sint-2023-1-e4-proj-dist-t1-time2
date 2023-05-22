import React from 'react';
import Sidebar from '../layouts/sidebar/Sidebar';
import CadastroForm from './CadastroForm';
import styles from'./CadastroBeneficiario.module.css';
import { useNavigate }from 'react-router-dom';

function CadastroBeneficiario(){
    const navigate = useNavigate()
    
    function createBenef(beneficiarios) {
       
        fetch('http://localhost:5000/beneficiarios', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(beneficiarios),
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            
            navigate('/AreadoBeneficiario', {state: 'Beneficiário cadastrado com sucesso!'})
        })
        .catch((err)=>console.log(err))
        
        
    }

    return(
        <>
            <nav>
                <Sidebar/>
            </nav>
            
            <div className={styles.content}>
                <div className={styles.formtitle}>               
                 <h1>Cadastro Beneficiário</h1>
                 
                </div>
 
                <div className={styles.beneficiariosform}>
                    <CadastroForm handleSubmit={createBenef} btnText="Cadastrar"/>
                </div>
                
            </div>
            
        </>
    )
}

export default CadastroBeneficiario;