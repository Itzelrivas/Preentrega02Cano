import Accordion from 'react-bootstrap/Accordion';

function AcordionPreguntas() {
  return (
    <Accordion style={{width: "70%", marginBottom: "4%"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5 style={{fontFamily:"monospace", fontWeight: "bold", backgroundColor: "beige"}}>¿Los productos son originales?</h5></Accordion.Header>
        <Accordion.Body>
          Todos los productos son 100% originales y auténticos, de no ser asi, puedes devolvernos el producto y solicitar una devolución de tu dinero.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><h5 style={{fontFamily:"monospace", fontWeight: "bold", backgroundColor: "beige"}}>¿Tienen envíos?</h5></Accordion.Header>
        <Accordion.Body>
          Contamos con envios a cualquier estado de México, pero muy pronto tambien contaremos con envios Internacionales.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><h5 style={{fontFamily:"monospace", fontWeight: "bold", backgroundColor: "beige"}}>¿Cuentan con tienda física?</h5></Accordion.Header>
        <Accordion.Body>
          Por el momento solo vendemos en línea, pero si estas en Guanajuato, podemos mostrarte los productos personalmente, solo es necesario que nos escribas por medio de WhatsApp.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><h5 style={{fontFamily:"monospace", fontWeight: "bold", backgroundColor: "beige"}}>¿Puedo regresar un producto despúes de haberlo comprado?</h5></Accordion.Header>
        <Accordion.Body>
          Puedes regresar un producto siempre y cuando no hayan pasado más de 30 dias desde que lo compraste, no este dañado, tenga sus etiquetas correspondientes, y muestres tu recibo de compra.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><h5 style={{fontFamily:"monospace", fontWeight: "bold", backgroundColor: "beige"}}>¿Hay pedidos personalizados?</h5></Accordion.Header>
        <Accordion.Body>
          Si estas en busca de un producto en específico, puedes contactarnos y mandarnos una fotito de él, para podertelo cotizar, y si lo deseas, encargarlo.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AcordionPreguntas;