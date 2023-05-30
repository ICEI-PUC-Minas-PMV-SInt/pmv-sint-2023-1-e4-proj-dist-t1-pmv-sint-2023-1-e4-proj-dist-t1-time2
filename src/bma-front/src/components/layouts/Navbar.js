import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import Logo_bma from '../../img/logo_bma.png'



function Navbar() {
    return (
        <>
        <nav className={styles.navbar}>
            <Container>
                <div>
                <Link to="/">
                <img className={styles.logo} src={Logo_bma} alt="BMA"/>
                </Link>
                </div>
                <div className={styles.name}>
                    <ul>
                        <li className={styles.item}>Banco Municipal de Alimentos</li>
                    </ul>
                </div>

                <div className={styles.list}>
                <ul >
                    <li className={styles.item}><Link to="/">Home</Link></li>                    
                    <li className={styles.item}><Link to="/CadastroBeneficiario">Cadastro de Beneficiario</Link></li>                    
                    
                    
                </ul>
                </div>

            </Container>
        </nav>
        </>
    )


}

export default Navbar; 