import styles from './Input.module.css';

function Input({type, text, name, placeholder, handleOnChange,value,onBlur}) {
    return (
        <div className={styles.form_control}>
            <div>
                <label htmlFor={name}>{text}:</label>
            </div>
            
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                onBlur={onBlur}
                

            />
            
            
        </div>
    )
}

export default Input;