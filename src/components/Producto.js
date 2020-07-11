import React from 'react'
import { Button, CardSubtitle, CardTitle, CardBody, Card, CardImg, Col, CardText  } from 'reactstrap';
import './Producto.css';
import FichaProducto from './FichaProducto';

//export const Producto = ({titulo, imagen, precio, descripcion}) => {
export class Producto extends React.Component{
    render(){
    return (
        <Col sm="4">
            <Card className="Card" body outline color="primary">
                <CardImg src={this.props.imagen}/>
                <CardBody>
                    <CardTitle>{this.props.titulo}</CardTitle>
                    <CardSubtitle><b>Valor: </b>{this.props.precio}</CardSubtitle>
                    <CardText>
                        {this.props.descripcion}
                    </CardText>
                    <FichaProducto props={this.props}>

                    </FichaProducto>
                </CardBody>
            </Card>
        </Col>
    );
    }
}