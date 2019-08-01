import React, { Component } from "react";
import { URL_SERVIDOR } from "../constants";

class ListaVeiculosApreendidos extends Component {
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
      <div className="div-main">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Chassi</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((veiculo, index) => {
              return (
                <tr key={index}>
                  <td>{veiculo.placa}</td>
                  <td>{veiculo.chassi}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListaVeiculosApreendidos;
