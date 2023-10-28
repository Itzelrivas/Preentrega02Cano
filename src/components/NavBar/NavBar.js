//import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from 'react-router-dom';
import React, { useContext } from 'react';
import { CantidadContext } from '../../App';
//import { agregarProducto, carrito } from "../../Pages/ProductosDisponibles";
//import { carrito2 } from "../../Pages/ProductosDisponibles";
//import { cantidad } from "../../Pages/ProductosDisponibles";

//chicle y pega para el widget 04
//const CantidadContext = React.createContext()

function NavBar() {

  const cantidad = useContext(CantidadContext)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} activeClassName to = {"/"} style={{fontFamily: "fantasy"}}><h2>Pancho Ross</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink activeClassName to = {"/catalogo"} style={styles.Links}>Catálogo</NavLink>
            <NavDropdown style={styles.Links} title="Más Información" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} activeClassName to = {"/promociones"}>Promociones</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeClassName to = {"/contacto"}>Contacto</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} activeClassName to = {"/preguntasFrecuentes"}>Preguntas frecuentes</NavDropdown.Item>
              
              <NavDropdown.Item as={NavLink} activeClassName to = {"/carrito"}>Mi carrito</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget numero={cantidad}/>
    </Navbar>
  );
}

const styles ={
  Links: {
    color: 'grey',
    marginLeft: '15%',
    fontFamily: 'monospace',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    textDecoration: 'none'
  }
}

export default NavBar;

//chicle y pega