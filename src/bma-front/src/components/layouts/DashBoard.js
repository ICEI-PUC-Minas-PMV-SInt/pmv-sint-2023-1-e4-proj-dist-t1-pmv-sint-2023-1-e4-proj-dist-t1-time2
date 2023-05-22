import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import styles from './DashBoard.module.css'
import donation from '../../img/doacv2.png' 
import agricultura from '../../img/agrv1.png'
import familia from '../../img/familiav1.png'
import instituicao from '../../img/instv1.png'

function Dashboard() {
    return (
        <CardGroup className={styles.Card}>
            <Card >
                <Card.Body className={styles.cardShadow}>
                    <Card.Title className={styles.cardTitle} style={{fontSize:16}}>36 INSTITUIÇÕES ATENDIDAS</Card.Title>
                    
                    <Card.Text>
                    <img  src={instituicao} className={styles.imgFood}/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className={styles.cardShadow} >
                    <Card.Title className={styles.cardTitle} style={{fontSize:16}}>130 FAMÍLIAS BENEFICIADAS</Card.Title>
                    <Card.Text>
                    <img  src={familia} className={styles.imgFood}/>   
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body className={styles.cardShadow}>
                    <Card.Title className={styles.cardTitle} style={{fontSize:16}}>+ DE 115 TONELADAS DE ALIMENTOS DOADOS</Card.Title>
                    <Card.Text>
                        <img  src={donation} className={styles.imgFood}/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body className={styles.cardShadow}>
                    <Card.Title className={styles.cardTitle} style={{fontSize:16}}>PARCERIA COM A AGRICULTURA FAMILIAR</Card.Title>
                    <Card.Text>
                    <img  src={agricultura} className={styles.imgFood}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default Dashboard
