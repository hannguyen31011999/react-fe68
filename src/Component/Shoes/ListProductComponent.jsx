import React, { Component } from 'react'
import ProductComponent from './ProductComponent'

export default class ListProductComponent extends Component {
    renderProduct = () => {
        const { data, addToCart } = this.props;
        return data.map((shoes, index) => {
            return (
                <ProductComponent key={index} shoes={shoes} addToCart={addToCart} />
            );
        });
    }
    render() {
        return (
            <div className="row">
                {this.renderProduct()}
            </div>
        )
    }
}
