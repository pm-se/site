import React from 'react';
import {Link} from "react-router-dom";
import NoticiaThumb from "./NoticiaThumb";
import { URL_SERVIDOR } from '../constants';

export default class MuralNoticias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        let url = `${ URL_SERVIDOR }/listarTodas`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({news: data}));

    }

    render() {
        console.log(this.state);
        const {news} = this.state;
        let carregando = '';
        if (!news) {
            carregando = <div> Carregando... </div>;
        }
        return (
            <div>
                {carregando}
            <section className="container"  style={{marginTop: '20px', marginBottom: '20px'}}>
                {news.map( (v, k) => {
                    return (
                       <NoticiaThumb key={k} id={v.id} titulo={v.categoria.nome} />
                    );

                } )}
            </section>
                <div className="jumbotron">
                    <div className="text-lg-center">
                        <h3><Link to="/">MAIS NOTÍCIAS</Link></h3>
                    </div>
                </div>
            </div>
        );
    }
}
