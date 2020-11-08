import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

export default class Example extends React.Component{

    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    loadProduct(){
        axios.get('http://127.0.0.1:8000/producti').then((response)=> {
            this.setState({
                products: response.data
            })
        })
    }

    componentWillMount(){
        this.loadProduct();
    }



    render(){

        let products = this.state.products.map((product) => {
            return (
                <tr key={product.id}>
                <td> {product.id}</td> 
                <td> {product.name}</td> 
                <td> ${product.price}</td> 
                <td> {product.quantity}</td> 
                <td><a href="">Editar/Excluir</a></td>
                </tr>
            )
        })



        return (
<div className="container">
            <br></br>
    <table class="table table-bordered table-hover table-striped">

            <caption>Products</caption>

        <thead>

        <tr class="thead-dark">
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Editar ou Excluir</th>
       
        </tr>
        </thead>

        <tbody>
        {products}
        </tbody>



    </table>
</div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
