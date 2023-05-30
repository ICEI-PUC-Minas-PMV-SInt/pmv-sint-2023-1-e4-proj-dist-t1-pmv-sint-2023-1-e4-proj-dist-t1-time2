import React, { useState,useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import BuscaCpf from './BuscaCpf'
import styles from './AreadoBeneficiario.module.css'
import Message from '../layouts/mensagem/Message'
import BeneficiariosCard from './BeneficiariosCard'

function AreadoBeneficiario(){
   const [beneficiarios, setBeneficiarios]= useState ([])
    
   const location = useLocation()
    
    let message = ''
    if (location.state) {
        message = location.state.message
        
        
    }
    
    useEffect(() => {
        fetch(`https://localhost:7255/api/Beneficiarios`, {
            method: 'GET',
            headers:{
                'Content-Type':'aplication/json',

            },
            
        })
            
            .then((resp) => resp.json())
            .then((data)=> {
                
                setBeneficiarios(data)
                console.log(data)
                
                

                
            })
            .catch((err) => console.log(err))
            
            
        
    },[])

    function removeBeneficiario(beneficiarioId){
        
        fetch(`https://localhost:7255/api/Beneficiarios/${beneficiarioId}`, {
            method: 'DELETE',
            headers:{
                'Content-Type':'aplication/json',

            },
            
        })
            
            .then((resp) => resp.json())
            .then((data)=> {
                
                //setBeneficiarios(beneficiarios.filter((beneficiario)=> beneficiario.id !==beneficiarioId))
                console.log(data)
                
                

                
            })
            .catch((err) => console.log(err))
    }
    
   
        return(
        <>
           
            <div className={styles.content}>
                <h2> Área do Beneficiário</h2>
                {message && <Message type="success" msg={message}/>}
            
                <div className={styles.input_cpf}>
                    <BuscaCpf/>
                </div>
                <div>
                {beneficiarios.length >0 &&
                    beneficiarios.map((beneficiario) => <BeneficiariosCard
                    id={beneficiario.id}
                    beneficiarioId={beneficiario.beneficiarioId}
                    name={beneficiario.titularBolsaFamilia.nome}
                    nis={beneficiario.titularBolsaFamilia.nis}
                    dependentes={beneficiario.quantidadeDependentes}
                    handleRemove={removeBeneficiario}
                    />)}
        
                </div>
                
            
            </div>   
        
        
        </>
)
}
export default AreadoBeneficiario