import CardProducto from "../components/CardProducto/CardProducto"
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import React, {useContext, useEffect, useState} from 'react'
import { CantidadContext, CarritoContext } from "../App"

//let cantidad, setCantidad

//chicle y pega para el widget 04
//const CantidadContext = React.createContext()

const ProductosDisponibles = () => {

    const [items, setItems] = useState([])
        useEffect(() => {
            const db = getFirestore();
            const itemCollection = collection(db, "Catalogo")
            getDocs(itemCollection).then(respuesta =>
                setItems(respuesta.docs.map((doc) => ({id: doc.id, ...doc.data() }))))
        }, [])

    productos = items

    //const[carrito, setCarrito] = useState([])

    //CHICLE Y PEGA P2
    //const[cantidad, setCantidad]=useState(carrito.length)

    //chicle y pega para el widget 04
    const [carrito, setCarrito] = useContext(CarritoContext)
    const [cantidad, setCantidad] = useContext(CantidadContext)

    /*chcile y pega 06
    useEffect(() =>{
        console.log(carrito)
      }, [carrito])*/

    //chcile y pega 06
    useEffect(() =>{
        carrito2 = carrito.slice()
        console.log(carrito2)
    }, [carrito])

    const agregar = (clave) => {
        //setCarrito(currentProductos => currentProductos.concat(clave))
        setCarrito([...carrito, {clave}])

        //console.log(carrito)
        //chicle y pega, SI PEGO
        //carrito2 = carrito.slice()
        //console.log(carrito2)

        //chicle y pega para el widget 04
        setCantidad(currentValue => currentValue+1)
        console.log(cantidad)

        //CHICLE Y PEGA P2
        //setCantidad(currentValue => currentValue+1)
        //cantidadP=cantidad
        //cantidadO = cantidad
        //cp=cantidad
        //console.log(cantidad)
    }

    //chicle y pega para renderizar el carrito

    return (
        <>
            <div style={{textAlign:"center", fontFamily: "monospace", marginTop: "2%"}}>
                <h3 style={{fontWeight: "bolder", backgroundColor: "#f5f5dcc4"}}>Productos disponibles:</h3>
            </div>
            <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", alignContent:"center"}}>
            {
            items.map((articulo) => {
                return (
                    <CardProducto imagen={articulo.imagen} producto={articulo.producto} descripcion={articulo.marca} codigo={articulo.codigo} agregar={agregar}/>
                )
            })
            }
            </div>
        </>
    )
} 

export default ProductosDisponibles

export let productos 

//chicle y pega
export let carrito2
//export let cantidadP





