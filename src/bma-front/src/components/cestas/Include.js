import React, { useState } from 'react';
import {Checkboxdata} from '../form/Checkboxdata'
import Input from '../form/Input';


function Include({e,type, text, name,value,handleOnChange}) {
    const checkboxmap = (input)=>{ 
        return (
            <>
            <label key={`input-${input.id}`} htmlFor={input.name}>{input.text}</label>
            <Input
            
            type = {input.type}
            text={input.quantidade}
            name={input.name}
            placeholder={input.placeholder}
            handleOnChange={input.handleOnChange}
            />
            </>
        )}  
       
    const[checkbox,setCheckbox]=useState(false)
    const includeCheckbox = () => {
        
        setCheckbox(!checkbox)
        
    }
        
      
    
    return (
       <>
       <div className='form_control'>
            <div>
                <label htmlFor={name}>{text}</label>
            </div>
          
            <input 
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={handleOnChange}
                onClick={includeCheckbox}
                
            />
        </div>
            {checkbox && (
            <div className='include_input'>
                {Checkboxdata.map(checkboxmap)}
            </div>
            )}
        </>                                                                
                                                                          
    )
                                                                          

            
            
    
         
    }

export default Include;

