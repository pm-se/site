import React, { Component } from "react";
import Arquivo from "../noticia.json";
import { Link } from "react-router-dom";

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

  montaHtml = (bloco, k) => {
    const urlVideo = bloco.data.embed;
    const tipoNoticia = bloco.type;
    let noticia = "";
    if (tipoNoticia === "paragraph") {
      noticia = <h6>{bloco.data.text}</h6>;
    } else {
      noticia = (
        <div className="card col-12 col-sm-6 col-md-6 col-lg-6 p-0 m-1" key={k}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              allowFullScreen
              title={bloco.data.caption}
              src={urlVideo}
            />
          </div>
        </div>
      );
    }
    return noticia;
  };

  render() {
    //const { Arquivo } = this.state;
    return (
      <div>
        {Arquivo.map((dados, indice) => (
          <div className="card" key={indice}>
            <div className="card-body">
              <h5 className="card-title">{dados.titulo}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <br />
                {dados.conteudo.blocks.map((block, chave) => {
                  return (
                    <div key={chave}>
                      {this.montaHtml(block, chave)}
                      <br />
                      {dados.autor.nome}
                    </div>
                  );
                })}
              </h6>
            </div>
          </div>
        ))}
        <div className="jumbotron" align="center">
          <h3>
            <Link to="/acoes_sociais">MAIS NOTÍCIAS</Link>
          </h3>
        </div>
      </div>
    );
  }
}
