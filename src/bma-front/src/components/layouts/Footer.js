
import styles from './Footer.module.css'

function Footer(){
    return( 
        <footer>
            <p className={styles.footer}> 
                <span>BMA Poços de Caldas</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;