import React from 'react';
import styles from './Input.module.css';
import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace (/[^0-9]/g,'');

function MaskedImput ({value, onChange,name,mask,text,onBlur,onClick,onEnter}) {
    
    function handleChange(event){
        onChange({
            ...event,
            target:{
                ...event.target,
                name,
                value: onlyNumbers(event.target.value),
            }
        })

    }
    return(
        <div className={styles.form_control}>
        <div>
            <label htmlFor={name}>{text}:</label>
        </div>

        <InputMask 
        name={name}
        mask={mask}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        onClick={onClick}
        
        />
        
        
        
        </div>
    )
}

export default MaskedImput;