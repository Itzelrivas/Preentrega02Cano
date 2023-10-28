//chicle y pega

import { useContext, useEffect, useState } from "react"
//import CrearOrden from "../components/CrearOrden/CrearOrden"
//import { carrito2 } from "./ProductosDisponibles"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import CardCarrito from "../components/CardCarrito/CardCarrito"
import { CantidadContext, CarritoContext } from "../App"
//import { getByDisplayValue } from "@testing-library/react"
//import CardProducto from "../components/CardProducto/CardProducto"

const MiCarrito = () =>{
    const[nombre, setNombre] = useState("")
    const[numero, setNumero] = useState("")
    const[correo, setCorreo] = useState("")

    //chicle y pega 05
    const [carrito, setCarrito] = useContext(CarritoContext)

    const [cantidad, setCantidad] = useContext(CantidadContext)

    /*chicle y pega 9
    function limpiarCarrito(){
        setTimeout(() => {
            setCarrito=[]
            setNombre=''
            setCorreo=''
            setNumero=''
        }, 2000)
    }*/

//chicle y pega. Lo deje funcional itzelita, no quiero errores porfa
    const dataBase = getFirestore()
    const orderCollection = collection(dataBase, "ordenes")
    const crearOrden = () => {
        const total = carrito.reduce((acum, item) => acum+item.precio, 0)
        const orderData = {
            comprador:{
                nombre: nombre,
                telefono: numero,
                correo: correo
            },
            productos: [...carrito],
            //chicle y pega 05
            //productos: [...carrito],
            total: total
        }
        addDoc(orderCollection, orderData)

        //chicle y pega 8
    }

    /*chilce y pega. dios, soy yo ora vez
    const finalizar = () => {
        crearOrden()
        limpiarCarrito()
    }*/

    useEffect(()=>{
        console.log(carrito)
    }, [carrito])

    const eliminar = (clave) => {
        //setCarrito(currentProductos => currentProductos.concat(clave))
        setCarrito(carrito.filter(item => item !== clave))
        //console.log(clave)
        //console.log(carrito)
        //chicle y pega, SI PEGO
        //carrito2 = carrito.slice()
        //console.log(carrito2)

        //chicle y pega para el widget 04
        setCantidad(currentValue => currentValue-1)

        //CHICLE Y PEGA P2
        //setCantidad(currentValue => currentValue+1)
        //cantidadP=cantidad
        //cantidadO = cantidad
        //cp=cantidad
        //console.log(cantidad)
    }

    const finalizarCompra = () =>{
        crearOrden()
        setTimeout(() => {
            setCarrito([])
            setCantidad(0)
        }, 2000)
    }

    return(
        //console.log(carrito2)
        <>
            {cantidad>0 ?
            <div style={{textAlign: 'center'}}>

                <div style={{textAlign: 'left', backgroundColor: '#50809f', margin: '2%'}}>
                    <h3 style={{padding: '0.5%', color:'white'}}>Productos en tu carrito:</h3>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {
                        carrito.map((articulo) => {
                            return(
                                <CarritoContext.Provider value ={[carrito, setCarrito]}><CardCarrito producto={articulo.clave.producto} marca={articulo.clave.marca} precio={articulo.clave.precio} imagen={articulo.clave.imagen} eliminar={eliminar}/></CarritoContext.Provider>
                            )
                        })
                    }
                </div>

                <div style={{textAlign: 'left', backgroundColor: '#50809f', margin: '2%'}}>
                    <h3 style={{padding: '0.5%', color:'white'}}>Llena este formulario y finaliza tu compra :)</h3>
                </div>

                <div>
                    <label style={styles.labels}>Nombre:</label>
                    <input style={styles.input} type="text" onChange={(evt) => setNombre(evt.target.value)}></input>
                </div>
            
                <div>
                    <label style={styles.labels}>Número telefónico:</label>
                    <input style={styles.input} type="text" onChange={(evt) => setNumero(evt.target.value)}></input>
                </div>
                
                <div>
                    <label style={styles.labels}>Correo:</label>
                    <input style={styles.input} type="text" onChange={(evt) => setCorreo(evt.target.value)}></input>
                </div>

                <div>
                    <button
                    disabled={!(nombre!=='' && numero!=='' && correo!== '')}
                    onClick={finalizarCompra}
                    style={{borderRadius: '17px', padding: '0.5%', color: '#c20f0f', borderColor: '#c20f0f', fontWeight: '500'}}
                    >Finalizar compra</button>
                </div>

            </div>
             : 
            <h2 style={styles.noProductos}>¡Oh no! No has agregado ningún articulo a tu carrito</h2>
            }
        </>
    )
}

const styles ={
    labels: {
      margin: '1.5%',
      fontFamily: 'fangsong',
      backgroundColor: '#b2061694',
      color: 'white',
      padding: '0.5%',
      fontWeight: 'bolder'
    },
    input: {
        backgroundColor: 'beige',
        borderRadius: '17px',
        fontFamily: 'cursive',
        color: '#7a6b6b',
        padding: '0.5%'
    },
    noProductos: {
        padding: '0.5%',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'cursive',
        margin: '3%',
        backgroundColor: '#921212'
    }
  }

export default MiCarrito