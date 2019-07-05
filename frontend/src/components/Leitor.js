import React, { Component } from "react";
import Arquivo from "../noticia.json";
import { tsExternalModuleReference } from "@babel/types";

export default class Leitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Arquivo: []
    };
  }

  componentDidMount() {
    // fetch('noticia.json')
    //   .then(resultado => resultado.json())
    //   .then(dados => this.setState({Arquivo: dados}));
  }

  // function montaHtml(block, key) {
  //   return console.log(block.type === "paragraph" ? "texto" : "video") + key;
  // }

  render() {
    //const {Arquivo} = this.state;
    return (
      <div>
        {Arquivo.map((dados, indice) => (
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{dados.titulo}</h3>
              <h6 className="card-subtitle mb-2 text-muted">
                {dados.conteudo.version}
                <br />
                {dados.conteudo.blocks.map((block, chave) => {
                  const link = block.data.embed;
                  return (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {block.data.caption}
                    </a>
                  );
                })}
              </h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
