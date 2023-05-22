import React,{useState} from 'react'
import styles from "./BuscaCpf.module.css"
import MaskedImput from "../layouts/form/MaskedInput"
import { Link } from 'react-router-dom';
function BuscaCpf () {
    const [data, setData] = useState([]);
    const [cpf, setCpf]=useState('')    
    const submitHandler= (e) => {
       
        e.preventDefault();
        const {value} = e.target
        const cpf =value.replace(/[^0-9]/g,'')
             
             
        
        fetch(`http://localhost:5000/beneficiarios?CPF=${cpf}`, {
            method: 'GET',
            headers:{
                'Content-Type':'aplication/json',

            },
            
        })
            
            .then((resp) => resp.json())
            .then((data)=> {
                
                setData(data)
                console.log(data)

                
            })
            .catch((err) => console.log(err))
        }
    const cleanCpf=()=>{
        setCpf('')
        setData([])
    }    
        
    return(
        <>
        <div className={styles.busca_cpf}>
            
            <MaskedImput
                text="CPF"
                name="CPF"
                value={cpf}
                mask="999.999.999-99"
                onChange={(e)=> setCpf(e.target.value)}
                onBlur={submitHandler}
                
            />
           <div>
           <button>Buscar</button>                                                             
           <button onClick={()=>cleanCpf('')}>Limpar</button>
           </div>
        </div>    
        
            {data.length ? (
            <div className={styles.result}>
                <p>Usuário Cadastrado</p>
                <button>Editar</button>
            </div>):
            (
            <div className={styles.result}>
            <p>Usuário não encontrado</p>
            <button><Link to='/CadastrodoBeneficiario'>Cadastrar Beneficiario</Link></button>
            </div>)}
           
        </>    
        
        
    )
}

export default BuscaCpf