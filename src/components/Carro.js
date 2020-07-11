import React from 'react';
import { Button, Badge, Popover, PopoverHeader, PopoverBody, Table } from 'reactstrap';
import { listaCarrito } from '../listaCarrito.json';

class Carro extends React.Component{

    constructor(){
        super();
        this.state = {
            popoverOpen:false,
            listaCarrito
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState =>({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    totalProducts(){
        let total=0;
        listaCarrito.forEach((item,i) => {
            const precio_item = listaCarrito[i].precio;
            total += parseInt(precio_item)*1000;
        });
        console.log(total);
        return total +` CLP`;
    }

    render(){

        const carritoArr = this.state.listaCarrito.map(({titulo, precio},i) =>{
            return(
                <tr key={i}>
                    <td scope="row">{(i+=1)}</td>
                    <td>{titulo}</td>
                    <td>{precio}</td>
                </tr>
            );
        })

        return(
            <>
                <Button id="pop" color="primary">
                    <span className="material-icons d-block m-2">shop</span>
                    <Badge color="info" className="d-block">{carritoArr.length}</Badge>
                </Button>

                <Popover target="pop" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>
                        <p>Carro de compras</p>
                    </PopoverHeader>
                    <PopoverBody>
                        <Table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carritoArr}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td scope="row"><b>Total:</b></td>
                                    <td></td>
                                    <td>{this.totalProducts()}</td>
                                </tr>
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </>
        );
    }
}

export default Carro;