import React from 'react';
import { Modal, Button, Container, ModalHeader, ModalBody, ModalFooter, CardImg } from 'reactstrap';
import './FichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';

class FichaProducto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal:false,
            total:0,
            stock:props.props.stock,
            listaCarrito
        }
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
        console.log(props.props);
    }

    toggle(){
        
        this.setState(prevState =>({
            modal: !prevState.modal
        }));
    }

    agregarCarrito(){
        listaCarrito.push({
            "titulo":this.props.props.titulo,
            "precio":this.props.props.precio
        });
        this.setState(prevState =>({
            modal:!prevState.modal,
            stock : parseInt(prevState.stock) - 1
        }))
        /*listaCarrito.map( (data) =>{
            return console.log("desde =>",data);
        });*/

    }

    validarStock(){
        let estado = this.state.stock;
        let name = this.props.props.titulo;
        if(estado <0){
            alert(`No hay mas stock de este producto !!! ${name}`);
            return;
        }
        return estado;
    }

    

    render(){
        return(
            <Container>
               <Button onClick={this.toggle}>Ver ficha</Button> 
               <Modal isOpen={this.state.modal}>
                    <ModalHeader>
                        {this.props.props.titulo}
                    </ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}></CardImg>
                        <p>El detalle del producto seleccionado es el siguiente: </p>
                        {this.props.props.descripcion}
                        <p>Este producto tiene un valor de <b>{this.props.props.precio}</b>pesos.</p>
                        <p>Hay <b>{this.validarStock()}</b> unidades de este producto disponibles. </p>
                    </ModalBody>
                    <ModalFooter className="modalfooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
               </Modal>
            </Container>
            
        );
    }
}

export default FichaProducto;