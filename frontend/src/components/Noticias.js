import React, { Component } from 'react'

export default class Noticias extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noticias: []
        };
    }

    componentDidMount() {
        let url = "http://localhost:8080/listarTodas";
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let noticiaFetch = data.map((noticia, index) => {
               
                return(
                    <div key={index}>
                        <h3>{noticia.categoria.nome}</h3>
                        <h3>{noticia.conteudo}</h3>
                        <hr/>
                    </div>
                )
            })
            this.setState({ noticias: noticiaFetch });
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.noticias}
            </div>
        );
    }
}