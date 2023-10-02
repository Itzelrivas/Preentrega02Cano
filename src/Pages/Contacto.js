import CardRedes from "../components/CardRedes/CardRedes"

const Contacto = () => {
    return(
        <div>
            <h2 style={{fontFamily: "monospace", margin: "2% 2% 0% 2%", fontWeight: "bolder", backgroundColor: "#901c1c", color: "white"}}>  Contacto</h2>
            <h4 style={{textAlign: "center", fontFamily:"monospace", margin: "2%", backgroundColor: "#f5f5dcc4"}}>Puedes contactarte con nosotros por cualquiera de nuestras redes sociales. Tenemos un horario de atención a clientes de 10am a 10pm.</h4>
            <CardRedes/>
        </div>
    )
}

export default Contacto