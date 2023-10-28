import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Contacto from './Pages/Contacto';
import Promociones from './Pages/Promociones';
import Producto from './components/Producto/Producto';
import ProductosDisponibles from './Pages/ProductosDisponibles';
import Preguntas from './Pages/Preguntas';
import fondo from './assets/images/fondoGeneral_PanchoRoss.png'
import MiCarrito from './Pages/MiCarrito';
import React, { useState } from 'react';

export const CantidadContext = React.createContext();
export const CarritoContext = React.createContext();
//chicle
export const DineroContext = React.createContext();

function App() {

  const [carrito, setCarrito] = useState([])
  const [cantidad, setCantidad] = useState(0)
  const [dinero, setDinero] = useState(0)

  return (
    <div style={{backgroundImage:`url(${fondo})`}}>
      <BrowserRouter>
        <CantidadContext.Provider value={cantidad}><NavBar/></CantidadContext.Provider>
        <Routes>
          <Route path = '/' element = {<Inicio/>}/>
          <Route path ='/contacto' element ={<Contacto/>}/>
          <Route path ='/promociones' element ={<Promociones/>}/>
          <Route path ='/preguntasFrecuentes' element ={<Preguntas/>}/>
          <Route path ='/catalogo' element ={<CarritoContext.Provider value ={[carrito, setCarrito]}><CantidadContext.Provider value={[cantidad, setCantidad]}><DineroContext.Provider value={[dinero, setDinero]}><ProductosDisponibles/></DineroContext.Provider></CantidadContext.Provider></CarritoContext.Provider>}/>
          <Route path='/catalogo/:itemId' element={<Producto/>}/>
          <Route path='/carrito' element={<CarritoContext.Provider value ={[carrito, setCarrito]}><CantidadContext.Provider value={[cantidad, setCantidad]}><DineroContext.Provider value={[dinero, setDinero]}><MiCarrito/></DineroContext.Provider></CantidadContext.Provider></CarritoContext.Provider>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
