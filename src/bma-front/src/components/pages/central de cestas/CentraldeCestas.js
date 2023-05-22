import React from 'react';
import Sidebar from '../../layouts/sidebar/Sidebar';
import styles from './CentraldeCestas.module.css';
import CestasForm from '../../cestas/CestasForm';
import CestasContainer from '../../cestas/CestasContainer';






function CentraldeCestas() {
   
    
    function createPost(doacoes) {
            
        
        fetch('http://localhost:5000/baskets', {
            method:'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(doacoes),
        })
        .then((resp) => resp.json)
        
        
        .catch((err) => console.log(err))
    }

    
    return(
        <>
            <nav>
                <Sidebar/>
            </nav>
            
            <div className={styles.content}>
                <div className={styles.formtitle}>               
                 <h2>Cadastro de Doações</h2>
                </div>
 
                <div className={styles.projectform}>
                    <CestasForm handleSubmit={createPost} btnText="Cadastrar"/>
                </div>
                <div className={styles.cestas}>
                   
                    <CestasContainer/>
                </div>
            </div>
            
        </>
    );
}

export default CentraldeCestas;