import React, { useEffect, useState } from 'react';
import Input from './Input';



function TrackNis({beneficiariosData}) {
    const [name,setName]=useState([])
    const [beneficiarios,setBeneficiarios]=useState(beneficiariosData || {});

    const convertToArray=(obj)=>{
        const arr =[obj]
        return arr
    }
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
                const array=convertToArray(data);
                setName(array)
                
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
            onBlur={onBlurNis}
            onChange={handleChange}                
        />
        {name.length > 0 ? (name.map ((name) =>(        
        
            <Input
                key={name.nome}
                type="text" 
                text="Nome"
                name="nome"
                value={beneficiarios.nome}
                onChange={handleChange}
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
        <button>Buscar</button>                                                             
           
        </div>
      
      

      </>
    )
}

                
                
                
             
                

export default TrackNis;