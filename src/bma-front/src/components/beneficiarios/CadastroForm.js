import React, { useState } from 'react';
import MaskedImput from '../layouts/form/MaskedInput';
import Submit from '../layouts/form/Submit';
import Input from '../layouts/form/Input';
import styles from "./cadastrobeneficiarioform.module.css"
import TrackNis from '../layouts/form/TrackNis';

function CadastroForm({handleSubmit,btnText,beneficiariosData}){
    
    const [beneficiarios,setBeneficiarios]=useState(beneficiariosData || {});    
    const [data, setData] = useState([]);
    
    const convertToArray=(obj)=>{
        const arr =[obj]
        return arr
    }
    
    function onBlurCep(e){
        const {value}=e.target
        const cep =value?.replace(/[^0-9]/g,'')
        
        if(cep?.length !==8) {
            return;
        }
        fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`, {
            method: 'GET',
            headers:{
                'Content-Type':'aplication/json',

            },
            
        })
            
            .then((resp) => resp.json())
            .then((data)=> {
                const array=convertToArray(data);
                setData(array)
                
            })
            .catch((err) => console.log(err))
                           
    }
                
                

                
    
    function handleChange(e) {
        setBeneficiarios({...beneficiarios, [e.target.name]: e.target.value })             
    }
    function submit(e) {
        e.preventDefault();
       
        handleSubmit(beneficiarios);
    }  
    return(
        <form onSubmit= {submit} className={styles.benform}>
            <fieldset className={styles.dadospessoais}>
            <legend>Informações Pessoais</legend>
            <TrackNis/>   
            
            </fieldset>     
            
            <fieldset className={styles.localizacao}>
            <legend>Endereço</legend>  
                <div className={styles.endereco}>
               <div> 
                <MaskedImput
                    text="CEP"
                    name="cep"
                    mask="99999-999"
                    value={beneficiarios.cep}
                    onBlur={onBlurCep}
                    onChange={handleChange}
                                                       
                />
              {data.length > 0 ? (data.map ((adress) =>(
                <Input
                    key={adress.cep}                   
                    type="text" 
                    text="Cidade"
                    name="city"
                    value={adress.city}                               
                    onBlur={handleChange}                
                />
               
                ))):(
                    <Input
                                            
                   type="text" 
                   text="Cidade"
                   name="endereco"
                   placeholder=""                              
                   /> )} 
                
                {data.length > 0 ? (data.map ((adress) =>(
                <Input
                    key={adress.cep}                   
                    type="text" 
                    text="Estado"
                    name="state"
                    value={adress.state}
                    onBlur={handleChange}                               
                                    
                />
               
                ))):(
                    <Input
                    type="text" 
                    text="Estado"
                    name="state"                    
                    placeholder=""                              
                    /> )}       
                                            
            </div>                   
            
            
            </div>
            
            <div className={styles.endereco}>
            <div className={styles.street}>
            {data.length > 0 ? (data.map ((adress) =>(
                <Input
                    key={adress.cep}                   
                    type="text" 
                    text="Logradouro"
                    name="street"
                    value={adress.street}                               
                    onBlur={handleChange}                
                />
               
                ))):(
            <Input
                type="text" 
                text="Logradouro"
                name="street"
                placeholder=""                                
                />)}
            </div>
                <div>
                    
                
                <Input
                    type="text" 
                    text="Número"
                    name="number"
                    placeholder=""                                
                    handleOnChange={handleChange}                 
                /> 
                
                
                <Input
                    type="text" 
                    text="Complemento"
                    name="complement"
                    placeholder=""                                
                    handleOnChange={handleChange}                 
                />  
                {data.length > 0 ? (data.map ((adress) =>(
                <Input
                    key={adress.cep}                   
                    type="text" 
                    text="Bairro"
                    name="neighborhood"
                    value={adress.neighborhood}                               
                    onBlur={handleChange}                
                />
               
                ))):(
            <Input
                type="text" 
                text="Bairro"
                name="neighborhood"
                placeholder=""                                
                />)}
                </div>
                </div>                       
            
            </fieldset>  
            <div className='submit'>
                <Submit text={btnText}/>
            </div>             

                                    
        </form>
    )
}

export default CadastroForm;