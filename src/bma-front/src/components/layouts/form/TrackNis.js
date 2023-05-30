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
        console.log(beneficiarios)             
    }
    
    return(
      <>
        <div>
        
        <Input
                                   
            type="text" 
            text="NIS"
            name="titularBolsaFamilia.nis" 
            value={beneficiarios.nis}                                             
            onBlur={onBlurNis}
            handleOnChange={handleChange}                
        />
        {name.length > 0 ? (name.map ((item) =>(        
        
            <Input
                key={item.id}
                type="text" 
                text="Nome"
                name="titularBolsaFamilia.nome"
                value={item.titularBolsaFamilia.nome}
                onBlur={handleChange}
                placeholder=""                                
        />))):(
            <Input
                                    
           type="text" 
           text="Nome"
           name="nome"
           placeholder=""
                                        
           /> )} 
        </div>
        <div>
        {name.length > 0 ? (name.map ((item) =>(        
        
        <Input
            key={item.id}
            type="text" 
            text="Quantidade de Dependentes"
            name="quantidadeDependentes"
            value={item.quantidadeDependentes}
            onBlur={handleChange}
            placeholder=""                                
    />))):(
        <Input
                                
       type="text" 
       text="Quantidade de Dependentes"
       name="quantidadeDependentes"
       placeholder=""
                                     
       /> )} 
    </div>
        
      
      

      </>
    )
}

                
                
                
             
                

export default TrackNis;