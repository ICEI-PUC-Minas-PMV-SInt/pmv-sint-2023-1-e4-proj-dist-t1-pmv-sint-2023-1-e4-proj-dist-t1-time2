import{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function SearchApi() {
    const {id} = useParams
    const [busca,setBusca] = useState('')
    
    useEffect(() => {
        if (busca) {
         fetch(`http://localhost:5000/beneficiarios/${id}`, {
             method:'GET',
             headers: {
                 'Content-Type': 'application/json',
             },
             
         })
         .then((resp) => resp.json())
         .then((data) => {
             setBusca(data)
         })
         .catch((err) => console.log(err))
         } 
     }, [id])
    
    
}
export default SearchApi;


