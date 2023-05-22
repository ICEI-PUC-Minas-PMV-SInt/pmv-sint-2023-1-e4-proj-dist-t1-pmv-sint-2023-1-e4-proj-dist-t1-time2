import DoacoesCard from './DoacoesCard';
import {useState, useEffect} from 'react'
import './CestasContainer.css'
import Message from '../layouts/mensagem/Message'

function CestasContainer(){
    const [cestas,setCestas] = useState([])
    const [cestaMessage,setcestaMessage]=useState('')
    useEffect(() => {
        fetch('http://localhost:5000/baskets', {
            method:'GET',
            headers: {
                'Content-Type':'application.json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCestas(data)
        })
        .catch((err) => console.log(err))
    
    },[])
    function removeCesta(id){
        fetch(`http://localhost:5000/baskets/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application.json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCestas(cestas.filter((cesta)=> cesta.id !== id))
            setcestaMessage("Cadastro removido com sucesso!")
            
        })
        .catch((err) => console.log(err))
    
    }
        
    

    return(
        <div className='cesta_container'>
            <h3>Cadastros</h3>        
        {cestaMessage && <Message type="success" msg={cestaMessage}/>}
        {cestas.length >0 ?
        ((cestas.map((cesta) => (
           < DoacoesCard 
           key={cesta.id}
           id={cesta.id}
           cpf={cesta.cpf}
           name={cesta.name}
           cestabasica={cesta.cestabasica}
           cestaverde={cesta.cestaverde}
           datacestabasica={cesta.datecestabasica}
           datacestaverde={cesta.datecestaverde}
           localcestabasica={cesta.localcestabasica}
           localcestaverde={cesta.localcestaverde} 
           handleRemove={removeCesta}        

           />
        )))):<p>Não há cestas cadastradas</p>}
        </div>
    )
}


export default CestasContainer;
