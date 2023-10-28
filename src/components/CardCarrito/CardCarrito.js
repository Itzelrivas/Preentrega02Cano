import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CarritoContext } from '../../App';

function CardCarrito({producto, marca, precio, imagen, eliminar}) {

    const [carrito, useState]=useContext(CarritoContext)
    const clave = carrito.find((elemento) => elemento.clave.producto == producto)

  return (
    <Card className="text-center" style={{width: '60%', margin: '2%'}}>
      <Card.Body>
        <Card.Title style={{fontFamily: 'fantasy', color: '#dc0a0a'}}>{producto}</Card.Title>
        <Card.Text style={{fontFamily: 'cursive'}}>
          Este producto es de la marca {marca}
        </Card.Text>
        <div><Card.Img style={{width: '20%', marginBottom: '3%'}} src={imagen} alt="Producto de Pancho Ross"/></div>
        <Button variant="primary" onClick={() => eliminar(clave)} style={{backgroundColor: 'black'}}>Eliminar del carrito</Button>
      </Card.Body>
      <Card.Footer className="text-muted" style={{fontWeight: '1000'}}>Precio: ${precio}</Card.Footer>
    </Card>
  );
}

export default CardCarrito;