import React, { Component } from "react";
import { URL_SERVIDOR } from '../constants';

export default class Noticia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      noticia: {}
    };
  }

  componentDidMount() {
    let url = `${ URL_SERVIDOR }/noticia/${this.props.id}`;
    fetch(url)
      .then(resposta => resposta.json())
      .then(dados => this.setState({ noticia: dados }));
  }

  render() {
    const { noticia } = this.state;
    let content = '';
    if (noticia.conteudo) {
      console.log(noticia);
      content = noticia.conteudo.blocks.map((valor, chave) => {
        return <p>bloco</p>;
      })
    }
    return (
      <div>
        
      </div>
    );
  }
}
