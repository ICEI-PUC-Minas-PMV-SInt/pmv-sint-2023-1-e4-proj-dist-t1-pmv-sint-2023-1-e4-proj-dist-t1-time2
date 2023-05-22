import React from 'react';
import Sidebar from '../../layouts/sidebar/Sidebar';
import './PaginaPadrao.css';


function PaginaPadrao(){
    return(
        <>
          <nav>
              <Sidebar/>
          </nav>
           <div className='container'>
                <h1>Página padrão</h1>
            </div>
        </>
    );
};

export default PaginaPadrao;
