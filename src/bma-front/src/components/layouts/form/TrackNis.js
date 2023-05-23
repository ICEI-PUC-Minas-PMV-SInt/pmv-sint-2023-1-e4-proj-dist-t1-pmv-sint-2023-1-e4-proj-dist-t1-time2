import React, { useEffect, useState } from 'react';
import Input from './Input';


function TrackNis() {
    const [name,setName]=useState([])
    
    function onBlurNis (e) {
        const nis =(e) =>{
            e.target.value; 
        }
        
        fetch(`https://localhost:7255/${nis}`, {
            method: 'GET',
            headers:{
                'Content-Type':'aplication/json',

            },
            
        })           
            .then((resp) => resp.json())
            .then((data)=> {
                
                setName(data)
            })
            .catch((err) => console.log(err))
            
        
    }
    return(
      <>
        <div>
        {name.length > 0 ? (name.map ((item) =>(
            <Input
                key={item.Id}                   
                type="text" 
                text="NIS"
                name="nis"
                value={item.id}                               
                onBlur={onBlurNis}                
            />
                
                    ))):(
            <Input
                type="text" 
                text="Nome"
                name="nome"
                placeholder=""                                
        />)}
        </div>
        <div>
        <button>Buscar</button>                                                             
           
        </div>
      
      

      </>
    )
}

                
                
                
             
                

export default TrackNis;