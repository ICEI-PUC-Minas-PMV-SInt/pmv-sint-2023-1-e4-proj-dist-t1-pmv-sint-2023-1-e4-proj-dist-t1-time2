import React, { useEffect, useState } from 'react';


function TrackCpf() {
    const [name,setName]=useState('')
    const cpf =(e) =>{
        e.target.value; 
    }
    useEffect(()=> {
        fetch(`http://localhost:5000/beneficiarios?CPF=${cpf}`, {
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
           
    })
    return(
      <>
      <input>
        ="Nome"
        {name.map(item=> (
            value=<p Key={item.id}>{item.name}</p>
        ))}
      </input>
      

      </>
    )
}

                
                
                
             
                

export default TrackCpf;