import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Contacto from './Pages/Contacto';
import Promociones from './Pages/Promociones';
import Producto from './components/Producto/Producto';
import ProductosDisponibles from './Pages/ProductosDisponibles';
import Preguntas from './Pages/Preguntas';
import fondo from './assets/images/fondoGeneral_PanchoRoss.png'
//Chicle y ´pega
import MiCarrito from './Pages/MiCarrito';
import React, { useState } from 'react';

//chicle y pega para el widget 04
export const CantidadContext = React.createContext();
export const CarritoContext = React.createContext()

function App() {

  //chicle y pega para el widget 04
  const [carrito, setCarrito] = useState([])
  const [cantidad, setCantidad] = useState(0)
  /*useEffect(() =>{
    console.log(carrito)
  }, [carrito])*/

  return (
    <div style={{backgroundImage:`url(${fondo})`}}>
      <BrowserRouter>
        
        <CantidadContext.Provider value={cantidad}><NavBar/></CantidadContext.Provider>

        <Routes>
          <Route path = '/' element = {<Inicio/>}/>
          <Route path ='/contacto' element ={<Contacto/>}/>
          <Route path ='/promociones' element ={<Promociones/>}/>
          <Route path ='/preguntasFrecuentes' element ={<Preguntas/>}/>

          <Route path ='/catalogo' element ={<CarritoContext.Provider value ={[carrito, setCarrito]}><CantidadContext.Provider value={[cantidad, setCantidad]}><ProductosDisponibles/></CantidadContext.Provider></CarritoContext.Provider>}/>

          <Route path='/catalogo/:itemId' element={<Producto/>}/>

          <Route path='/carrito' element={<CarritoContext.Provider value ={[carrito, setCarrito]}><CantidadContext.Provider value={[cantidad, setCantidad]}><MiCarrito/></CantidadContext.Provider></CarritoContext.Provider>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
