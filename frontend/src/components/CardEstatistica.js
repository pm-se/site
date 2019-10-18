import React, { Component } from "react";
import ListaVeiculosApreendidos from  './ListaVeiculosApreendidos';

export default class CardEstatistica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: []
    };
  }

  render() {
    return (
      <div>
        <div className="card col-12 col-sm-2 col-md-6 col-lg-6 tamanho-minimo-estatisticas p-0 m-1">
          <h1>
              
          </h1>
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="http://localhost:3000" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
