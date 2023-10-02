import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardRedes() {
  return (
    <div style={{display: "flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center"}}>
        <Card style={{width: "45%", margin:"2% 2%"}}>
            <Card.Header as="h5">Facebook</Card.Header>
            <Card.Body style={{display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center"}}>
                <img style={{width:"8%"}} src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-facebook-doodle-charbak-dipta.jpg" alt="Facebook: Pancho Ross"/>
                <Card.Title>Pancho Ross</Card.Title>
                <Card.Text>
                Para no perderte ningún aviso ni promoción, siguenos en nuestra página de facebook donde estamos constantemente activos.
                </Card.Text>
                <Button variant="primary">Siguenos</Button>
            </Card.Body>
        </Card>

        <Card style={{width: "45%", margin:"2% 2%"}}>
            <Card.Header as="h5">Instagram</Card.Header>
            <Card.Body style={{display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center"}}>
                <img style={{width:"8%"}} src="https://taphoammo.net/img/tang-tuong-tac-instagram-gia-sieu-re_655154.png" alt="Instagram: PanchoRoss_tienda"/>
                <Card.Title>PanchoRoss_tienda</Card.Title>
                <Card.Text>
                En esta plataforma solemos hacer muchas dinámicas, en donde puedes ganarte códigos de descuentos semanales y mocho más.
                </Card.Text>
                <Button variant="primary">Siguenos</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default CardRedes;