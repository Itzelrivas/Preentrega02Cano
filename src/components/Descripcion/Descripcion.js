function Descripcion({imagend, productod, marcad, preciod}) {
    return (
        <>
        <div>
            <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", alignItems:"center", marginTop: "2%", fontFamily: "fantasy"}}>
                <img style={{width:"30%"}} src={imagend} alt="Producto de Pancho Ross"/>
                <h2>{productod}</h2>
                <h4 style={{fontFamily: "monospace", fontWeight: "bolder"}}>Marca: {marcad}</h4>
                <h3 style={{color:"#cc2222", textDecoration: "underline"}}>${preciod}</h3>
            </div>
        </div>
        </>
    );
  }

  export default Descripcion;