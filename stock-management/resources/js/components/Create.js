import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Create extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            newProductData: {
                name:"",
                price:"",
                quantity:""
            }
        };
    }

    loadProduct() {
        axios.get("http://127.0.0.1:8000/producti").then(response => {
            this.setState({
                products: response.data
            });
        });
    }

    componentWillMount() {
        this.loadProduct();
    }

    addProduct(){
        axios.post("http://127.0.0.1:8000/producti", this.state.newProductData).then(response => {
            let {products} = this.state
            this.loadProduct()
            this.setState({
                products,
                newProductData:{
                    name:"",
                    price:"",
                    quantity:""
                }
            })
        });   
    }

    render() {
        let products = this.state.products.map(product => {
            return (
                <tr key={product.id}>
                    <td> {product.id}</td>
                    <td> {product.name}</td>
                    <td> ${product.price}</td>
                    <td> {product.quantity}</td>
                   
                </tr>
            );
        });

        return (
            
            <div className="container">
                <br></br>
                <div className="row">
                <div className="col-5"></div>
                <form>
                <label>
                Name:
                <input className="form-control" type="text" id="name" value={this.state.newProductData.name} onChange={(e) =>{
                    let {newProductData} = this.state
                    newProductData.name = e.target.value
                    this.setState({newProductData})
                }} />
                </label>
                <br></br>
                <label>
                Price:
                <input className="form-control" type="float" id="price" value={this.state.newProductData.price} onChange={(e) =>{
                    let {newProductData} = this.state
                    newProductData.price = e.target.value
                    this.setState({newProductData})
                }}/>
                </label>
                <br></br>
                <label>
                Quantity:
                <input className="form-control" type="number" id="quantity" value={this.state.newProductData.quantity} onChange={(e) =>{
                    let {newProductData} = this.state
                    newProductData.quantity = e.target.value
                    this.setState({newProductData})
                }}/>
                </label>
                <br></br>
                <input  className="btn btn-info" type="submit" onClick={this.addProduct.bind(this)} value="Enviar" />
                </form>
                </div>
                <br></br>
                <table className="table table-bordered table-hover table-striped">
                    <caption>Products</caption>

                    <thead>
                        <tr className="thead-info">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            
                        </tr>
                    </thead>

                    <tbody>{products}</tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById("create")) {
    ReactDOM.render(<Create />, document.getElementById("create"));
}
