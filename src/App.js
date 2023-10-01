import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Contacto from './Pages/Contacto';
import Promociones from './Pages/Promociones';
import Producto from './components/Producto/Producto';
import ProductosDisponibles from './Pages/ProductosDisponibles';
import Preguntas from './Pages/Preguntas';
import fondo from './assets/images/fondoGeneral_PanchoRoss.png'

function App() {
  return (
    <div style={{backgroundImage:`url(${fondo})`}}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = '/' element = {<Inicio/>}/>
          <Route path ='/contacto' element ={<Contacto/>}/>
          <Route path ='/promociones' element ={<Promociones/>}/>
          <Route path ='/preguntasFrecuentes' element ={<Preguntas/>}/>
          <Route path ='/catalogo' element ={<ProductosDisponibles/>}/>
          <Route path='/catalogo/:itemId' element={<Producto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
