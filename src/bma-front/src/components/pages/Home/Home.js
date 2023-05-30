import Container from '../../layouts/Container'
import styles from './Home.module.css'
import food from '../../../img/boxes.jpg'

function Home (){
    return(
        <>
            
            <div className={styles.hometitle}>
                
                <img src={food} alt="" />
            </div>
            <div>
                
            </div>
       </>
    )
}
export default Home; 