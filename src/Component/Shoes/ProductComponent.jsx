import React, { Component } from 'react'

export default class ProductComponent extends Component {
    render() {
        const { shoes, addToCart } = this.props;
        return (
            <div className="col-4" style={{ paddingBottom: "30px" }}>
                <div className="card">
                    <img className="card-img-top" src={shoes.image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{shoes.name}</h5>
                        <p className="card-text">{shoes.price}$</p>
                        <button type="button" className="btn btn-primary" onClick={() => addToCart(shoes)}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
