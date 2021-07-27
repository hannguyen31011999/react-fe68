import React, { Component } from 'react'
import car from './arrayFeatures.json';
import wheel from './wheels.json';
import style from './style.module.css';

export default class CarComponent extends Component {
    state = {
        car: car[0],
        folder: car[0].srcImg,
        isActive: car[0].id,
        isActiveWheel: null
    }
    styleSpan = {
        fontSize: "12px"
    }
    handleOnClick = (id = null, isActive, idWheel = null) => {
        if (isActive) {
            const index = car.findIndex(item => item.id === id);
            this.setState({
                car: car[index],
                folder: car[index].srcImg,
                isActive: car[index].id,
                isActiveWheel: null
            });
        } else {
            const { car } = this.state;
            const index = car.wheels.findIndex(item => item.idWheel === idWheel);
            this.setState({ ...this.state, folder: car.wheels[index].srcImg, isActiveWheel: car.wheels[index].idWheel });
        }
    }
    componentWillMount = () => {
        const script = document.createElement("script");
        script.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.6.0/js-cloudimage-360-view.min.js";
        document.body.appendChild(script);
    }
    renderListColor = () => {
        return car.map((car, index) => {
            return (
                <li className="list-group-item px-0" style={{ cursor: "pointer", border: car.id === this.state.isActive ? "1px solid blue" : "" }} key={index} onClick={() => this.handleOnClick(car.id, true)}>
                    <div className="d-flex align-items-center">
                        <div className="col-2">
                            <img src={car.img} width={40} alt="" />
                        </div>
                        <div className="col-10 pl-4">
                            <h1 style={this.styleSpan} className="mb-0">{car.title}</h1>
                            <span style={this.styleSpan}>Pear</span>
                        </div>
                    </div>
                </li>
            );
        });
    }
    renderWheelsColor = () => {
        return wheel.map((item, index) => {
            return (
                <li className="list-group-item px-0" style={{ cursor: "pointer", border: item.idWheel === this.state.isActiveWheel ? "1px solid blue" : "" }} key={index} onClick={() => this.handleOnClick(null, false, item.idWheel)}>
                    <div className="d-flex align-items-center">
                        <div className="col-2">
                            <img src={item.img} width={40} alt="" />
                        </div>
                        <div className="col-10 pl-4">
                            <h1 style={this.styleSpan} className="mb-0">{item.title}</h1>
                            <span style={this.styleSpan}>Price: {item.price}$</span>
                        </div>
                    </div>
                </li>
            );
        })
    }
    render() {
        const { car, folder } = this.state;
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-9">
                        {/* <div className="cloudimage-360"
                            data-folder={`./images/${folder}`}
                            data-filename="civic-{index}.jpg" data-amount="8">
                        </div> */}
                        <img src={`./images/${folder}/civic-1.jpg`} alt="" className="w-100" />
                        <table className="table mt-2 table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th colSpan={2}><h3>See More LX Features</h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Color</td>
                                    <td>{car.color}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>${car.price}</td>
                                </tr>
                                <tr>
                                    <td>Engine Type</td>
                                    <td>{car.engineType}</td>
                                </tr>
                                <tr>
                                    <td>Displacement</td>
                                    <td>{car.displacement}</td>
                                </tr>
                                <tr>
                                    <td>Horsepower</td>
                                    <td>{car.horsepower}</td>
                                </tr>
                                <tr>
                                    <td>Torque</td>
                                    <td>{car.torque}</td>
                                </tr>
                                <tr>
                                    <td>Redline</td>
                                    <td>{car.redline}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <ul className="list-group list-group-flush">
                                {this.renderListColor()}
                            </ul>
                            <div className="card-footer">
                                Wheels
                            </div>
                            <ul className="list-group list-group-flush">
                                {this.renderWheelsColor()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}