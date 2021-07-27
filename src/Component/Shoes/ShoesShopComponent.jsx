import React, { Component } from 'react'
import CartComponent from './CartComponent'
import ListProductComponent from './ListProductComponent';
import data from './shoes.json';
export default class ShoesShopComponent extends Component {
    state = {
        cart: []
    }
    addToCart = (item) => {
        const cartUpdate = [...this.state.cart];
        const index = cartUpdate.findIndex(shoes => shoes.id === item.id);
        if (index === -1) {
            item = { ...item, qty: 1 };
            cartUpdate.push(item);
        } else {
            cartUpdate[index].qty++;
        }
        this.setState({
            cart: cartUpdate
        });
    }
    updateCart = (id, isActive) => {
        const cartUpdate = [...this.state.cart];
        const index = cartUpdate.findIndex(shoes => shoes.id === id);
        if (isActive) {
            cartUpdate[index].qty++;
        } else {
            if (cartUpdate[index].qty > 1) cartUpdate[index].qty--;
            else cartUpdate[index].qty = 1;
        }
        this.setState({
            cart: cartUpdate
        });
    }
    removeCart = (id) => {
        const cartUpdate = [...this.state.cart];
        const index = cartUpdate.findIndex(shoes => shoes.id === id);
        cartUpdate.splice(index, 1);
        this.setState({
            cart: cartUpdate
        });
    }
    render() {
        const { cart } = this.state;
        return (
            <div className="container mt-5">
                <h1 className="text-center">Shoes Shop</h1>
                <div className="row mb-5">
                    <div className="col-10"></div>
                    <div className="col-2 text-right"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#cart">Giỏ hàng ({this.state.cart.length > 0 ? this.state.cart.length : 0})</button></div>
                </div>
                <ListProductComponent data={data} addToCart={this.addToCart} />
                <CartComponent cart={cart} updateCart={this.updateCart} removeCart={this.removeCart} />
            </div>
        )
    }
}
