import React from "react";
import ListaArmas from "./ListaArmasApreendidas";
import ListaVeiculos from "./ListaVeiculosApreendidos";

export default class Estatistica extends React.Component<> {
  render() {
    return (
      <section className="container">
        <div className="row justify-content-center">
          <ListaArmas />
          <ListaVeiculos />
        </div>
      </section>
    );
  }
}
