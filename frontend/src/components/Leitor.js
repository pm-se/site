import React, { Component } from "react";
import Arquivo from '../noticia.json';

export default class Leitor extends Component {

  render() {
    return <div>
        {Arquivo.map((dados, indice)=> {
            return <p><div key={indice}>{dados.conteudo}</div></p>
        })}
    </div>;
  }
}
