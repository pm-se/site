import React, { Component } from "react";

export default class almoxarifado extends Component {
  render() {
    return (
      <div className="container div-main center">
        <h1> Almoxarifado Geral </h1>

        <br />
        <br />
        <h3>Chefe</h3>
        <br />
        
        <p>1° Tenente Nilton Silva Guimarães</p>
        <p>Funcional do Comandante: (79) 98867-5969</p>
      
        <br />
        <h3>Contato</h3>
        <br />
        
        <p>Endereço: Rua Maruim, n°2172, Bairro Getúlio Vargas, Aracaju/SE.</p>
        <p>Tel: (79) 3179-1060 / 98867-5447 (Patrimônio Móvel)</p>
        <p>Email: <a href="mailto:almoxarifado.pmse@pm.se.gov.br">almoxarifado.pmse@pm.se.gov.br</a></p>
        <p>Horário de funcionamento : 07h00 as 13h00</p>
      </div>
    );
  }
}
