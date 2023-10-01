import { useParams } from 'react-router-dom'
import { getProductoByCod } from '../../Helpers/Catalogo'

const Producto = () =>{
    const { itemId } = useParams()
    const product = getProductoByCod(itemId)

    return (
        <>
        <div>
            <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", alignItems:"center", marginTop: "2%", fontFamily: "fantasy"}}>
                <img style={{width:"30%"}} src={product.imagen} alt="Producto de Pancho Ross"/>
                <h2>{product.producto}</h2>
                <h4 style={{fontFamily: "monospace", fontWeight: "bolder"}}>Marca: {product.marca}</h4>
                <h3 style={{color:"#cc2222", textDecoration: "underline"}}>${product.precio}</h3>
            </div>
        </div>
        </>
    )
} 

export default Producto