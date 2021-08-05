import React, { Component } from "react";
import glass from "./glass.json";
export default class ListGlassComponent extends Component {
  //   list = glass;
  //   listGlass = () => {
  // let temp = [];
  // for (let i = 0; i < this.list.length; i++) {
  //     if (i === 0) temp.push(<img src={"../glassesImage/g" + (i + 1) + ".jpg"} alt="" key={i} id={this.list[i].id} className="active" onClick={() => { this.handleChange(this.list[i].id) }} />);
  //     else temp.push(<img src={"../glassesImage/g" + (i + 1) + ".jpg"} alt="" key={i} id={this.list[i].id} onClick={() => { this.handleChange(this.list[i].id) }} />);
  // }
  // return temp;
  //   };

  // let index = this.list.findIndex(item => item.id === id);
  // this.setState({
  //     glass: this.list[index]
  // });
  // this.list.forEach(item => {
  //     document.getElementById(item.id).classList.remove('active');
  // });
  // document.getElementById(id).classList.add('active');

  //   CODE KHÓ MAINTAIN
  state = {
    glassIdSelected: glass[0].id,
  };
  handleChange = (id) => {
    this.setState({
      glassIdSelected: id,
    });
  };

  renderListButton = () => {
    return glass.map((item, key) => (
      <button
        key={key + item.id}
        className="btn"
        onClick={() => {
          this.handleChange(item.id);
        }}
      >
        <img
          src={`glassesImage/g${item.id}.jpg`}
          style={{ height: "80px", width: "150px" }}
        />
      </button>
    ));
  };
  render() {
    const { glassIdSelected } = this.state;
    return (
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="row">
            <div className="col-4 model-image">
              <img src="../glassesImage/model.jpg" alt="" width={"100%"} />
              <img
                src="../glassesImage/v1.png"
                className="image"
                width={"100%"}
                alt=""
              />
            </div>
            <div className="col-4"></div>
            <div className="col-4 model-image">
              <img src="../glassesImage/model.jpg" alt="" width={"100%"} />
              <img
                src={`glassesImage/v${glassIdSelected}.png`}
                className="image"
                width={"100%"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-3"></div>
        <div className="col-2"></div>
        <div
          className="col-8 bg-secondary mt-5 py-2 d-flex"
          style={{  gap: "10px", flexWrap: "wrap" }}
        >
          {this.renderListButton()}
        </div>
        <div className="col-2"></div>
      </div>
    );
  }
}
