import React from 'react';
import basket from './images/basket.png';
import people from './images/people.png';
import admin from './images/admin.png';
import person from './images/person.png';
import {RiLogoutCircleRLine} from 'react-icons/ri'
export const SidebarData = [
    
    {
      id: 1,  
      title: 'Central de Cestas',
      path: '/CentraldeCestas',
      icon: <img src={basket}/>,
      cName: 'nav-text', 
     },
     {
      id: 2,
      title: 'Área do Beneficiário',
      path: '/AreadoBeneficiario',
      icon: <img src={people}/>,
      cName: 'nav-text', 
     },
     {
      id: 3,  
      title: 'Painel do Administrador',
      path: '/PaginaPadrao',
      icon: <img src={admin}/>,
      cName: 'nav-text', 
     }/*,
     {
      id:4,  
      title: 'Logout',
      path: '',
      icon: <img src = {person}/>,
      icon2: <RiLogoutCircleRLine/>,
      cName: 'nav-text', 
     },*/
];
