import React, { useEffect, useState } from 'react';
import Input from './Input';



function TrackNis({beneficiariosData}) {
    const [name,setName]=useState([])
    const [beneficiarios,setBeneficiarios]=useState(beneficiariosData || {});

    
    const onBlurNis = (e) => {
        e.preventDefault()
        const {value} = e.target
        const nis =value.replace(/[^0-9]/g,'')
        
        
        fetch(`https://localhost:7255/${nis}`, {
            method: 'GET',
            headers:{
                'Content-Type':'aplication/json',
                withCredentials: true,    
                crossorigin: true,
                mode: 'no-cors', 

            },
            
        })           
            .then((resp) => resp.json())
            .then((data)=> {
                
                
                setName(data)
                
            })
            .catch((err) => console.log(err))
            
        
    }
     function handleChange(e) {
        setBeneficiarios({...beneficiarios, [e.target.name]: e.target.value })             
    }
    
    return(
      <>
        <div>
        
        <Input
                                   
            type="text" 
            text="NIS"
            name="nis" 
            value={beneficiarios.nis}                                             
            onBlur={onBlurNis}
            onChange={handleChange}                
        />
        {name.length > 0 ? (name.map ((item) =>(        
        
            <Input
                key={item.titularBolsaFamilia}
                type="text" 
                text="Nome"
                name="nome"
                value={item.titularBolsaFamilia.nome}
                onChange={handleChange}
                placeholder=""                                
        />))):(
            <Input
                                    
           type="text" 
           text="Nome"
           name="nome"
           placeholder=""
           onChange={handleChange}                              
           /> )} 
        </div>
        <div>
        {name.length > 0 ? (name.map ((item) =>(        
        
        <Input
            key={item.quantidadeDependentes}
            type="text" 
            text="Quantidade de Dependentes"
            name="dependentes"
            value={item.quantidadeDependentes}
            onChange={handleChange}
            placeholder=""                                
    />))):(
        <Input
                                
       type="text" 
       text="Quantidade de Dependentes"
       name="dependentes"
       placeholder=""
       onChange={handleChange}                              
       /> )} 
    </div>
        
      
      

      </>
    )
}

                
                
                
             
                

export default TrackNis;