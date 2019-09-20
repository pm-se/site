import React, { Component } from "react";
import { URL_SERVIDOR } from "../constants";
import { Chart } from "react-google-charts";

class ListaVeiculosApreendidos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(`${URL_SERVIDOR}/veiculos_apreendidos`)
      .then(response => response.json())
      .then(responseData => {
        const armas = responseData;
        const Data = [["Tipo", "Quantidade"]];
        armas.forEach(element => {
          Data.push([element.tipo, element.quantidade]);
        });
        this.setState({
          Data: Data,
          loading: true
        });
      })
      .catch(err => console.log(`Descrição do erro: ${err}`));
  }

  render() {
    const { Data } = this.state;
    return (
      <div className="div-main">
        <Chart
          chartType="PieChart"
          data={Data}
          options={{
            title: "Veículos apreendidos",
            is3D: true
          }}
        />
      </div>
    );
  }
}

export default ListaVeiculosApreendidos;
