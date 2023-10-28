import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import Descripcion from '../Descripcion/Descripcion'
import Spiner from '../Spinner/Spinner'

const Producto = () =>{
    const { itemId } = useParams()

    const [items, setItems] = useState([])
        useEffect(() => {
            const db = getFirestore();
            const itemCollection = collection(db, "Catalogo")
            getDocs(itemCollection).then(respuesta =>
                setItems(respuesta.docs.map((doc) => ({id: doc.id, ...doc.data() }))))
        }, [])

    const product = items.find((doc) => doc.codigo == itemId)

    return (
        <>
            {product ?
                <Descripcion imagend={product.imagen} productod={product.producto} marcad={product.marca} preciod={product.precio}/>
                : <Spiner/>
            }
        </>
    )
} 

export default Producto