import { useContext, useEffect, useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import CardCarrito from "../components/CardCarrito/CardCarrito"
import { CantidadContext, CarritoContext, DineroContext } from "../App"
import swal from 'sweetalert';

const MiCarrito = () =>{
    const[nombre, setNombre] = useState("")
    const[numero, setNumero] = useState("")
    const[correo, setCorreo] = useState("")
    const [carrito, setCarrito] = useContext(CarritoContext)
    const [cantidad, setCantidad] = useContext(CantidadContext)
    const [dinero, setDinero] = useContext(DineroContext)

    const dataBase = getFirestore()
    const orderCollection = collection(dataBase, "ordenes")

    const crearOrden = () => {
        const orderData = {
            comprador:{
                nombre: nombre,
                telefono: numero,
                correo: correo
            },
            productos: [...carrito],
            total: dinero
        }
        addDoc(orderCollection, orderData)
    }

    useEffect(()=>{
        console.log(carrito)
    }, [carrito])


    const eliminar = (clave) => {
        setDinero(currentValue => currentValue-clave.clave.precio)
        setCarrito(carrito.filter(item => item !== clave))
        setCantidad(currentValue => currentValue-1)
    }

    const finalizarCompra = () =>{
        crearOrden()
        setTimeout(() => {
            setCarrito([])
            setCantidad(0)
            setDinero(0)
            swal("Tu compra se ha realizado exitosamente!", "Muchas gracias por comprar en Pancho Ross!", "success");
        }, 2000)
    }

    return(
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

                <div>
                    <h5 style={{backgroundColor: 'gainsboro', marginLeft: '2%', marginRight: '2%'}}>Tu total es de ${dinero}</h5>
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