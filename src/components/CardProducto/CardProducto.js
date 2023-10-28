import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productos } from '../../Pages/ProductosDisponibles';

function CardProducto({imagen, producto, descripcion, codigo, agregar}) {

  const clave = productos.find((producto) => producto.codigo == codigo)

  return (
    <Card style={{ width: '18rem', margin: '2%' }}>
      <Card.Img variant="top" src={imagen} alt="Producto de Pancho Ross"/>
      <Card.Body style={{textAlign: 'center', backgroundColor: 'grey', color:'white'}}>
        <Card.Title>{producto}</Card.Title>
        <Card.Text>
            {descripcion}
        </Card.Text>
        <Button onClick={() => agregar(clave)} style={{backgroundColor: 'black'}} variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;