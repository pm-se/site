import React from 'react';
import Carrossel from './Carrossel';
import Mural from './MuralNoticias';
import Estatisticas from './Estatisticas';
import { Link } from "react-router-dom";

export default class Principal extends React.Component<> {

  render() {
    return (
      <div>
        <Carrossel/>
        <Mural/>
        <Estatisticas/>
      </div>
    );
  }
}
