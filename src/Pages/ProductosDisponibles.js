import { productos } from "../Helpers/Catalogo"
import CardProducto from "../components/CardProducto/CardProducto"

const ProductosDisponibles = () =>{
    
    return (
        <>
            <div style={{textAlign:"center", fontFamily: "monospace", marginTop: "2%"}}>
                <h3 style={{fontWeight: "bolder", backgroundColor: "#f5f5dcc4"}}>Productos disponibles:</h3>
            </div>
            <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", alignContent:"center"}}>
            {
            productos.map((articulo) => {
                return (
                    <CardProducto imagen={articulo.imagen} producto={articulo.producto} descripcion={articulo.marca}/>
                )
            })
            }
            </div>
        </>
    )
} 

export default ProductosDisponibles