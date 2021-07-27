import React, { Component } from 'react'

export default class CartComponent extends Component {
    renderCart = () => {
        const { updateCart, removeCart } = this.props;
        return this.props.cart.map((item, index) => {
            return (
                <tr key={index}>
                    <td></td>
                    <td>{item.name}</td>
                    <td><img src={item.image} alt="" width={45} /></td>
                    <td>{item.price}$</td>
                    <td>
                        <button type="button" className="btn btn-warning" onClick={() => updateCart(item.id, false)}>-</button>
                        {item.qty}
                        <button type="button" className="btn btn-primary" onClick={() => updateCart(item.id, true)}>+</button>
                    </td>
                    <td>{item.price * item.qty}$</td>
                    <td><button type="button" className="btn btn-danger" onClick={() => removeCart(item.id)}>Remove</button></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="modal fade" id="cart" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.cart.length > 0 ? this.renderCart() : <tr><td colSpan={7} className="text-center">Giỏ hàng đang trống</td></tr>}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan={7} className="text-right">Subtotal: {this.props.cart.reduce((total, shoes) => { return total += shoes.qty * shoes.price; }, 0)}$</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
