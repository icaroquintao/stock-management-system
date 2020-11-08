import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class ShowProducts extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            editTaskModal:false,
            editProductData:{
                id:"",
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

    editProduct(id, name, price, quantity){
        this.setState({
            editProductData:{
                id,
                name,
                price,
                quantity
            }
        })
    }
    updateProduct(){
        let { name, price, quantity} = this.state.editProductData

        axios.put('http://127.0.0.1:8000/producti/'+this.state.editProductData.id, {
            name,
            price,
            quantity
        }).then((response)=>{
            this.loadProduct()

            this.setState({
                editProductData:{
                    id:"",
                    name:"",
                    price:"",
                    quantity:""
                }
            })

        })
    }
    deleteProduct(id){
        axios.delete('http://127.0.0.1:8000/producti/'+id).then((response)=>{
            console.log(id)
            this.loadProduct()
        })
    }

    render() {
        let products = this.state.products.map(product => {
            return (
                <tr key={product.id}>
                    <td> {product.id}</td>
                    <td> {product.name}</td>
                    <td> ${product.price}</td>
                    <td> {product.quantity}</td>
                    <td>
                    <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={this.editProduct.bind(this, product.id, product.name,product.price,product.quantity)}>
                    Edit this product
                    </button>
                    </td>
                    <td>
                    <button type="button" className="btn btn-danger" onClick={this.deleteProduct.bind(this, product.id)}>
                    Delete
                    </button>
                    </td>
                </tr>
            );
        });

        return (
            <div className="container">
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Product #{this.state.editProductData.id}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
                <label>
                Name:
                <input className="form-control" type="text" id="name" value={this.state.editProductData.name} onChange={(e) =>{
                    let {editProductData} = this.state
                    editProductData.name = e.target.value
                    this.setState({editProductData})
                }} />
                </label>
                <br></br>
                <label>
                Price:
                <input className="form-control" type="float" id="price" value={this.state.editProductData.price} onChange={(e) =>{
                    let {editProductData} = this.state
                    editProductData.price = e.target.value
                    this.setState({editProductData})
                }}/>
                </label>
                <br></br>
                <label>
                Quantity:
                <input className="form-control" type="number" id="quantity" value={this.state.editProductData.quantity} onChange={(e) =>{
                    let {editProductData} = this.state
                    editProductData.quantity = e.target.value
                    this.setState({editProductData})
                }}/>
                </label>
                <br></br>
                <input  className="btn btn-info" type="submit" onClick={this.updateProduct.bind(this)} value="Edit" />
                </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" >Save changes</button>
      </div>
    </div>
  </div>
</div>
                <br></br>
                <table className="table table-bordered table-hover table-striped">
                    <caption>Products</caption>

                    <thead>
                        <tr className="thead-dark">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>{products}</tbody>
                </table>
            </div>
            
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<ShowProducts />, document.getElementById("example"));
}
