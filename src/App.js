import React from 'react';
import './App.css';
import {Container, Row} from 'reactstrap';
import { Producto } from './components/Producto';
import Navegacion from './components/Navegacion';
import {listaProductos} from './listaProducto.json';
//import { ReactComponent } from '*.svg';

console.log(listaProductos);
class App extends React.Component{

  constructor(){
    super();
    this.state = {
      listaProductos
    };
  }

  render(){
    const arrComponentes = this.state.listaProductos.map(
      ({titulo, imagen, descripcion, precio, stock}, i)=>{
      return(
        <Producto
          key={i}
          titulo={titulo}
          imagen={imagen}
          descripcion={descripcion}
          precio={precio}
          stock={stock}
          >
        </Producto>
      )
    })
  return (
    <Container>
      <Navegacion titulo="Carrito de compra"></Navegacion>
      <Row>
       {arrComponentes}
      </Row>
    </Container>
  );
  }
}

export default App;
