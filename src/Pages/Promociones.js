import promocion from './../assets/images/promocion1_PanchoRoss.png';

const Promociones = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "center", marginTop: "2%"}}>
            <img style={{width:"60%"}} src={promocion} alt="Promoción primera compra en Pancho Ross"/>
            <h4 style={{fontFamily: 'monospace', fontWeight: "bolder", textDecoration: "underline", color: "#a01616"}}>Valido solo en la primera compra de cada usuario.</h4>
        </div>
    )
}

export default Promociones