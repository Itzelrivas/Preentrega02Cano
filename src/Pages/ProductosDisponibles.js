import CardProducto from "../components/CardProducto/CardProducto"
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import React, {useContext, useEffect, useState} from 'react'
import { CantidadContext, CarritoContext, DineroContext } from "../App"

const ProductosDisponibles = () => {

    const [items, setItems] = useState([])
        useEffect(() => {
            const db = getFirestore();
            const itemCollection = collection(db, "Catalogo")
            getDocs(itemCollection).then(respuesta =>
                setItems(respuesta.docs.map((doc) => ({id: doc.id, ...doc.data() }))))
        }, [])

    productos = items

    const [carrito, setCarrito] = useContext(CarritoContext)
    const [cantidad, setCantidad] = useContext(CantidadContext)

    const [dinero, setDinero] = useContext(DineroContext)

    useEffect(() =>{
        carrito2 = carrito.slice()
        console.log(carrito2)
    }, [carrito])

    const agregar = (clave) => {
        setCarrito([...carrito, {clave}])
        setCantidad(currentValue => currentValue+1)
        console.log(cantidad)
        setDinero(currentValue => currentValue + clave.precio)
    }

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
export let carrito2






