
import Carousel from 'react-bootstrap/Carousel'
import agricultura from '../../img/imgagrf1.jpg'
import bmaslide from '../../img/imgagrf3.jpg'
import cestasverdes from '../../img/imgagrf2.jpg'
import styles from './CarouselHome.module.css'

function CarouselHome() {
    return (
        <div className={styles.carouselInner}>
                <Carousel  indicators={false}>
                    <Carousel.Item >
                        <img className={styles.img} src={agricultura} alt="Agricultura Familiar" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.img} src={bmaslide} alt="BMA" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.img} src={cestasverdes} alt="Cestas Verdes" />
                    </Carousel.Item>
                </Carousel>
        </div>
    )

}

export default CarouselHome;

