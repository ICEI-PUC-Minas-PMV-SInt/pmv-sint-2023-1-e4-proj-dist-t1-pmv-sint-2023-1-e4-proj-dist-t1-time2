import './DoacoesCard.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function DoacoesCard({id, name, cpf,cestabasica, cestaverde, quantcestabasica,quantacestaverde,datacestabasica,datacestaverde,localcestabasica,localcestaverde, handleRemove}){
    const remove =(e)=> {
        e.preventDefault()
        handleRemove(id)
    }
    return(
        <div className='doacoes_card'>
            
            <p>
                <span>Nome do Beneficiário:</span>{name}
            </p>
            <p>
                <span>Cesta Básica:</span> {cestabasica}
            </p>
            <p>
                <span>Próxima Entrega:</span> {datacestabasica}
            </p>
            <p>
                <span>Local:</span>{localcestabasica}
            </p>
            <p>
                <span>Cesta Verde:</span>{cestaverde}
            </p>
            <p>
                <span>Próxima Entrega:</span>{datacestaverde}
            </p>
            <p>
                <span>Local:</span>{localcestaverde}
            </p>  
            <div className='doacoes_card_actions'>
                {/*<Link to="/"><BsPencil/> Editar</Link>*/}
                <button onClick={remove}>
                 <BsFillTrashFill/>Excluir
                </button>
            </div>
                
                
             
             
        </div>
        
                
                
    )
}

export default DoacoesCard;