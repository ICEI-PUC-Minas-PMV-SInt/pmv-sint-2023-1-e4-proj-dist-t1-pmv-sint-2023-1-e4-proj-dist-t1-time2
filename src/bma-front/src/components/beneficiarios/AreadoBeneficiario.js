import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import BuscaCpf from './BuscaCpf'
import Sidebar from '../layouts/sidebar/Sidebar'
import styles from './AreadoBeneficiario.module.css'
import Message from '../layouts/mensagem/Message'

function AreadoBeneficiario(){
   
    const location = useLocation()
    
    let message = ''
    if (location.state) {
        message = location.state.message
        console.log(message)
        
    }
    
    
   
        return(
        <>
           <Sidebar/>
            <div className={styles.content}>
                <h2> Área do Beneficiário</h2>
                {message && <Message type="success" msg={message}/>}
            
                <div className={styles.input_cpf}>
                    <BuscaCpf/>
                </div>
                
            
            </div>   
        
        
        </>
)
}
export default AreadoBeneficiario