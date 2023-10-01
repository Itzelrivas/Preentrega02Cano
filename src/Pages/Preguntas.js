import AcordionPreguntas from "../components/AcordionPreguntas/AcordionPreguntas"

const Preguntas = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center"}}>
            <h3 style={{textAlign: "center", backgroundColor: "#7b0d0db0", margin: "2% 2%", fontFamily: "fantasy", color: "white"}}>Preguntas frecuentes:</h3>
            <AcordionPreguntas/>
        </div>
    )
}

export default Preguntas