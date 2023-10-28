import Carousel from 'react-bootstrap/Carousel';
import descuento1 from '../../assets/images/descuentoPR.png'
import carrusel1 from '../../assets/images/mujerComprandoPR.png'

function UncontrolledExample() {
    return (
        <div style={{display: "flex", justifyContent:"center", marginTop: "2%"}}>
        <Carousel style={{width: "70%", marginBottom: "4%"}}>
            <Carousel.Item>
                <img style={{width: "100%"}} src= {descuento1} alt="10% de descuento de tu primera compra"/>
                <Carousel.Caption style={{backgroundColor: "#f5f5dcc4", textAlign:"center", color:"black"}}>
                    <h3>Descuento en tu primera compra</h3>
                    <p>Para obtener un código del 10% de descuento en tu primera compra, registrate por favor.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width: "100%"}} src= {carrusel1} alt="Pancho Ross"/>
                <Carousel.Caption style={{backgroundColor: "#f5f5dcc4", textAlign:"center", color:"black"}}>
                    <h3>Nuevos productos cada semana</h3>
                    <p>Actualizamos nuestro catálogo cada siete días, usualmente el día Lunes.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default UncontrolledExample;