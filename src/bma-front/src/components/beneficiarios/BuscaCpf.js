import React,{useState} from 'react'
import styles from "./BuscaCpf.module.css"
import { Link } from 'react-router-dom';
import Input from '../layouts/form/Input';

function BuscaCpf () {
    const [data, setData] = useState([]);
    const [id, setId]=useState('')    
    const submitHandler= (e) => {
       
        e.preventDefault();
        const {value} = e.target
        const id =value
             
             
        
        fetch(`https://localhost:7255/api/Beneficiarios/${id}`, {
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
        setId('')
        setData([])
    }    
        
    return(
        <>
        <div className={styles.busca_cpf}>
            
            <Input
                text="ID"
                name="beneficiarioId"
                value={id}                
                onChange={(e)=> setId(e.target.value)}
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
            <button><Link to='/CadastroBeneficiario'>Cadastrar Beneficiario</Link></button>
            </div>)}
           
        </>    
        
        
    )
}

export default BuscaCpf