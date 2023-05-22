import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import Logo_bma from '../../img/logo_bma.png'



function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                <img className={styles.logo} src={Logo_bma} alt="BMA"/>
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>                    
                    <li className={styles.item}><Link to="/PortalFuncionario">Área do Funcionário</Link></li>                    
                    <li className={styles.item}><Link to="/portaldobeneficiario">Área do Beneficiário</Link></li>
                    
                </ul>

            </Container>
        </nav>
    )


}

export default Navbar; 