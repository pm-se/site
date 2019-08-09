import React, { Component } from "react";
import { URL_SERVIDOR } from "../constants";
import { Pie } from "react-chartjs-2";
import { Chart } from "react-google-charts";

class ListaVeiculosApreendidos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veiculos: [],
      Data: {},
      loading: true
    };
  }

  componentDidMount() {
    fetch(`${URL_SERVIDOR}/armas_apreendidas`)
      .then(response => response.json())
      .then(responseData => {
        const armas = responseData;
        let tipo = [];
        let quantidade = [];
        armas.forEach(element => {
          tipo.push(element.tipo);
          quantidade.push(element.quantidade);
        });
        this.setState({
          Data: {
            labels: tipo,
            datasets: [
              {
                label: "Armas apreendidas",
                data: quantidade,
                backgroundColor: [
                  "rgba(255,105,145,0.6)",
                  "rgba(155,100,210,0.6)",
                  "rgba(90,178,255,0.6)",
                  "rgba(240,134,67,0.6)",
                  "rgba(120,120,120,0.6)",
                  "rgba(250,55,197,0.6)"
                ]
              }
            ]
          },
          loading: true
        });
      })
      .catch(err => console.log(`Descrição do erro: ${err}`));
  }

  render() {
    const { Data } = this.state;
    return (
      <div className="div-main">
        <Pie data={Data} options={{ maintainAspectRatio: false }} />

        {/*<table className="table table-striped table-bordered">*/}
        {/*  <thead>*/}
        {/*    <tr>*/}
        {/*      <th>Quantidade</th>*/}
        {/*      <th>Tipo</th>*/}
        {/*    </tr>*/}
        {/*  </thead>*/}
        {/*  <tbody>*/}
        {/*  {veiculos.map((veiculo, index) => {*/}
        {/*      return (*/}
        {/*          <tr key={index}>*/}
        {/*              <td>{veiculo.quantidade}</td>*/}
        {/*              <td>{veiculo.tipo}</td>*/}
        {/*          </tr>*/}
        {/*      );*/}
        {/*  })}*/}
        {/*  </tbody>*/}
        {/*</table>*/}
      </div>
    );
  }
}

export default ListaVeiculosApreendidos;
