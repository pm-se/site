import React, { Component } from "react";
import { URL_SERVIDOR } from "../constants";

class ListaVeiculos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veiculos: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(`${URL_SERVIDOR}/veiculos`)
      .then(response => response.json())
      .then(responseData =>
        this.setState({ veiculos: responseData, loading: true })
      )
      .catch(err => console.log(`Descrição do erro: ${err}`));
  }

  render() {
    const { veiculos } = this.state;
    return (
      <div className="card col-12 col-sm-2 col-md-6 col-lg-6 tamanho-minimo-estatisticas p-0 m-1">
        <h1>{ veiculos.data }</h1>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Veículos apreendidos até o momento...
          </p>
        </div>
      </div>
    );
  }
}

export default ListaVeiculos;
