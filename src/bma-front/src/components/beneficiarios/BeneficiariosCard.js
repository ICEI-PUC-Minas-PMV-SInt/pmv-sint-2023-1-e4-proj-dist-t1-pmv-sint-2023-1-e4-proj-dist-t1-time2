import '../cestas/DoacoesCard.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function BeneficiariosCard({id,beneficiarioId,name, nis, dependentes, handleRemove}){
    const remove =(e)=> {
        e.preventDefault()
        handleRemove(id)
    }
    return(
        <div className='doacoes_card'>
            
            <p>
                <span>Beneficiário Id:</span>{beneficiarioId}
            </p>
            <p>
                <span>Nome do Beneficiário:</span>{name}
            </p>
            <p>
                <span>NIS:</span>{nis}
            </p>
            <p>
                <span>Quantidade de Dependentes:</span> {dependentes}
            </p>
            
            <div className='doacoes_card_actions'>
                <Link to="/"><BsPencil/> Editar</Link>
                <button onClick={remove}>
                 <BsFillTrashFill/>Excluir
                </button>
            </div>
                
                
             
             
        </div>
        
                
                
    )
}

export default BeneficiariosCard;