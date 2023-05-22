
import styles from './Footer.module.css'

function Footer(){
    return( 
        <footer>
            <p className={styles.footer}> 
                <span>BMA Poços de Caldas</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer;