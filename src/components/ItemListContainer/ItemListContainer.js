import banner from "../../assets/images/banner_PanchoRoss.PNG"
import UncontrolledExample from "../Carrusel/Carrusel"

const ItemListContainer = ({texto}) => {
    return(
        <div>
            <img style={{width:"100%"}} src={banner} alt="Banner Pancho Ross"/>
            <h1 style={{marginTop: '20px', backgroundColor: '#000000d1', color:'white', textAlign:"center"}}>{texto}</h1>
            <h3 style={{textAlign:"center", margin: "2%", fontFamily: "monospace", fontWeight: "bold", backgroundColor: "#ffffff8c"}}>Pancho Ross es una tienda que ofrece productos 100% originales y a los mejores precios, además de contar con una gran variedad de marcas, tales como: Tommy Hilfiguer, Michael Kors, Guess, Adidas, Calvin Klein, Victoria Secret, y más.</h3>
            <UncontrolledExample/>
        </div>
    )
}

export default ItemListContainer